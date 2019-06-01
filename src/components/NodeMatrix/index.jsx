import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nodeProps } from '../Node';
import Column from '../Column';
import loadRoot from '../../actions/loadRootNodeAction';
import NodeExplorer from '../../utils/NodeExplorer';

export class NodeMatrix extends React.PureComponent {

    componentDidMount() {
        this.props.didMount();
    }

    render(){
        const { width, root } = this.props;
        const levels = root ? NodeExplorer.getLevels(NodeExplorer.clone(root)) : [];
        const balancedLevels = [];
        for (let i = 0; i < levels.length; i++) {
            balancedLevels[i] = [];
            let topOffset = 0
            for (let j = 0; j < levels[i].length; j++) {
                if (levels[i][j].length > 0){
                    const parentOffset = levels[i][j][0].parentNode ? levels[i][j][0].parentNode.offset : 0;  
                    const paddingAmount = parentOffset - balancedLevels[i].length;
                    const topPadding = NodeExplorer.generateEmptyNodes('space', paddingAmount);
                    balancedLevels[i] = [...balancedLevels[i], ...topPadding];
                    topOffset += paddingAmount + 1;
                }
                for (let y = 0; y < levels[i][j].length; y++) {
                    const node = levels[i][j][y];
                    node.offset = topOffset++;
                    let bottomOffset = NodeExplorer.getOpenedChildrenWidth(node);
                    
                    topOffset += bottomOffset;
                    const bottomPadding = NodeExplorer.generateEmptyNodes('pipe', bottomOffset);
                    balancedLevels[i] = [...balancedLevels[i], node, ...bottomPadding];
                }
                
            }
        }
        //daw lines
        console.log(balancedLevels);
        for (let i = balancedLevels.length - 1; i > 0; i--) {
            for (let j = 0; j < balancedLevels[i].length; j++) {
                if (!balancedLevels[i][j].isEmpty){
                    balancedLevels[i - 1][j].type = 'line';
                }
            }
        }
        const cols = balancedLevels.map((level, i) => (<Column key={i} nodes={level} />))
        return (
            <div style={{display: 'flex'}}>
                {cols}
            </div>
        );
    }
}

export default connect(
    state => ({
        root: state.nodes.rootNode,
        width: state.matrix.matrixWidth
    }),
    dispatch => ({
        didMount: () => { dispatch(loadRoot()); },
    }),
)(NodeMatrix);

NodeMatrix.propTypes = {
    width: PropTypes.number.isRequired,
    root: PropTypes.shape(nodeProps),
};