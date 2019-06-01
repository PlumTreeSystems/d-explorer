import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadChildren from '../../actions/loadChildrenAction';
import toggleChildren from '../../actions/toggleChildrenAction';

export class Node extends React.PureComponent {
    render(){
        const { id, title,  } = this.props;
        return (
            <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
                <div>{title}</div>
                <button onClick={() => this.props.onLoad(id)} >Load</button>
                <button onClick={() => this.props.onToggle(id)} >Toggle</button>
            </div>
        );
    }
}

export const nodeProps = {
    id: PropTypes.string.isRequired,
    parent: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    showChildren: PropTypes.bool.isRequired
};
nodeProps.children = PropTypes.arrayOf(PropTypes.shape(nodeProps).isRequired);

Node.propTypes = nodeProps;

export default connect(
    state => ({
        
    }),
    dispatch => ({
        onLoad: (parent) => dispatch(loadChildren(parent)),
        onToggle: (parent) => dispatch(toggleChildren(parent)),
    }),
)(Node);