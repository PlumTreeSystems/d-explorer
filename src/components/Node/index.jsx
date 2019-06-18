import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setLoadingAction from '../../actions/Loading/setLoadingAction';
import setLoadedAction from '../../actions/Loading/setLoadedAction';
import loadChildren from '../../actions/loadChildrenAction';
import toggleChildren from '../../actions/toggleChildrenAction';
import openModalAction from '../../actions/Modal/openModalAction';
import setFocus from '../../actions/setFocus';
import RequestsManager, { requestName } from '../../utils/RequestsManager';

import './styles.css';

export class Node extends React.PureComponent {
    onOpenModal = () => {
        this.props.openModalAction({enrolleeId: this.props.id})
    };

    handleClick = async (nodeId) => {
        const {
            id, onLoad, showChildren, sourceUrl, numberOfChildren,
            setLoading, setLoaded, children,
        } = this.props;
        
        if (numberOfChildren > 0) {
            setLoading();
            let childrenResult = [];

            if (children.length === 0) {
                const url = sourceUrl + `?id=` + id;
                childrenResult = await RequestsManager(requestName.GET_CHILDREN, url);
            }
            
            if (!childrenResult.errors) {
                onLoad(id, showChildren, childrenResult);
            }

            setLoaded();

            this.props.setFocus(nodeId);

        }
    }

    render() {
        const { title, numberOfChildren, id, focusNode, parent } = this.props;
        const classList = ['Node__Container'];

        if (numberOfChildren === 0) {
            classList.push('disabled');
        }

        if (parent == focusNode) {
            classList.push('focus');
        }

        if (id === focusNode) {
            classList.push('selected');
        }

        return (
            <div className={classList.join(' ')}>
                <div onClick={() => this.handleClick(id)} className="Node__Title">
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
    state => ({
        sourceUrl: state.variables.sourceUrl,
        focusNode: state.variables.focusNode,
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
        setLoading: () => { dispatch(setLoadingAction()); },
        setLoaded: () => { dispatch(setLoadedAction()); },
        openModalAction: (enrolleeId) => dispatch(openModalAction(enrolleeId)),
        setFocus: (id) => { dispatch(setFocus(id)); },
    }),
)(Node);