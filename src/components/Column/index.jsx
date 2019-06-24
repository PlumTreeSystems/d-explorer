import React from 'react';
import PropTypes from 'prop-types';
import Node, { nodeProps } from '../Node';
import EmptyNode from '../EmptyNode';
import './index.css'

export default class Column extends React.PureComponent {
    render(){
        const { nodes } = this.props;
        const content = nodes.map( (n, i) => {
            if (n.isEmpty){
                return (<EmptyNode key={i} {...n} />);
            }
            return (<Node key={i} {...n} />);
        });
        return (
            <div className="Column__Container">{content}</div>
        );
    }
}

Column.propTypes = {
    nodes: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.shape(nodeProps),
        PropTypes.shape({
            isEmpty: PropTypes.bool.isRequired,
            type: PropTypes.string.isRequired
        }) 
    ])),
};