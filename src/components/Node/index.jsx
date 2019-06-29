import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setLoadingAction from '../../actions/Loading/setLoadingAction';
import setLoadedAction from '../../actions/Loading/setLoadedAction';
import loadChildren from '../../actions/loadChildrenAction';
import toggleChildren from '../../actions/toggleChildrenAction';
import openModalAction from '../../actions/Modal/openModalAction';
import RequestsManager, { requestName } from '../../utils/RequestsManager';

import './styles.css';

export class Node extends React.PureComponent {
    onOpenModal = () => {
        this.props.openModalAction({enrolleeId: this.props.id})
    };

    handleClick = async () => {
        const {
            id, onLoad, showChildren, sourceUrl, numberOfChildren,
            setLoading, setLoaded, children, onToggleChildren
        } = this.props;

        //hide
        if (showChildren){
            setLoading();
            onToggleChildren(id);
            setLoaded();
            return;
        }

        const childrenLength = children.filter(c => !c.loadMoreNode).length;
        
        if (numberOfChildren > 0) {
            setLoading();
            let childrenResult = [];
            let remainingChildren = 0;
            if (childrenLength === 0) {
                const url = sourceUrl + `?id=` + id;
                childrenResult = await RequestsManager(requestName.GET_CHILDREN, url);
                remainingChildren = numberOfChildren - childrenResult.length;
            }else {
                remainingChildren = numberOfChildren - childrenLength;
            } 

            if (!childrenResult.errors) {
                if (remainingChildren !== 0){
                    onLoad(id, showChildren, [...childrenResult, {
                        loadMoreNode: true, 
                        offset: numberOfChildren - remainingChildren, 
                        parent: id, 
                        id: 'load_'+ id, 
                        numberOfChildren: remainingChildren 
                    }]);
                }else{
                    onLoad(id, showChildren, childrenResult);
                }
            }
            setLoaded();
        }
    }

    handleLoadMoreClick = async () => {
        const {
            id, loadMore, sourceUrl, numberOfChildren,
            setLoading, setLoaded, parent, offset
        } = this.props;
        
        if (numberOfChildren > 0) {
            setLoading();
            let childrenResult = [];
            const url = `${sourceUrl}?id=${parent}&offset=${offset}`;
            childrenResult = await RequestsManager(requestName.GET_CHILDREN, url);

            if (!childrenResult.errors) {
                if (childrenResult.length < numberOfChildren){
                    const remainingChildren = numberOfChildren - childrenResult.length;
                    loadMore(parent, [...childrenResult, {
                        loadMoreNode: true, 
                        offset: childrenResult.length + offset, 
                        parent: parent, 
                        id: 'load_'+ parent, 
                        numberOfChildren: remainingChildren 
                    }]);
                }else{
                    loadMore(parent, childrenResult);
                }
            }
            setLoaded();
        }
    }

    render() {
        const { title, numberOfChildren, loadMoreNode } = this.props;
        const classList = ['Node__Container'];

        if(loadMoreNode){
            return (
                <div className={classList.join(' ')}>
                    <div onClick={() => this.handleLoadMoreClick()} className="LoadMoreNode__Title">
                        <span>Load More</span>
                    </div>
                </div>
            );
        }

        if (numberOfChildren === 0) {
            classList.push('disabled');
        }

        return (
            <div className={classList.join(' ')}>
                <div onClick={() => this.handleClick()} className="Node__Title">
                    <span>{title}</span> <span>{numberOfChildren}</span>
                </div>
                <div className="Node__ModalButtonContainer" onClick={this.onOpenModal}>
                    <i className="fa fa-external-link"></i>
                </div>
            </div>
        );
    }
}

export const nodeProps = {
    id: PropTypes.string.isRequired,
    loadMoreNode: PropTypes.bool,
    offset: PropTypes.number,
    parent: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    showChildren: PropTypes.bool,
    numberOfChildren: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        numberOfChildren: PropTypes.number.isRequired,
    })),
    sourceUrl: PropTypes.string,
    setLoading: PropTypes.func.isRequired,
    setLoaded: PropTypes.func.isRequired
};
nodeProps.children = PropTypes.arrayOf(PropTypes.shape(nodeProps).isRequired);

Node.propTypes = nodeProps;

Node.defaultProps = {
    showChildren: false,
    children: [],
}

export default connect(
    (state, props) => ({        
        sourceUrl: state.variables.sourceUrl,
    }),
    dispatch => ({
        onLoad: (id, show, children) => {
            if (show) {
                dispatch(toggleChildren(id));
            } else {
                dispatch(loadChildren(id, children));
                dispatch(toggleChildren(id));
            }
        },
        onToggleChildren: (id) => dispatch(toggleChildren(id)),
        loadMore: (id, children) => dispatch(loadChildren(id, children)),
        setLoading: () => { dispatch(setLoadingAction()); },
        setLoaded: () => { dispatch(setLoadedAction()); },
        openModalAction: (enrolleeId) => dispatch(openModalAction(enrolleeId)),
    }),
)(Node);