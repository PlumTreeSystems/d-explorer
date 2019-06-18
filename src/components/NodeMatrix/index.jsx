import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { nodeProps } from '../Node';
import Column from '../Column';
import loadRoot from '../../actions/loadRootNodeAction';
import NodeExplorer from '../../utils/NodeExplorer';
import setLoadingAction from '../../actions/Loading/setLoadingAction';
import setLoadedAction from '../../actions/Loading/setLoadedAction';
import addLevelWidth from '../../actions/addLevelWidth';
import Spinner from '../Spinner';
import Modal from './__Components/Modal';
import RequestsManager, { requestName } from '../../utils/RequestsManager';

import './styles.css';

export class NodeMatrix extends React.PureComponent {
    async componentDidMount() {
        const {
            root, didMount, sourceUrl, setLoading, setLoaded,
        } = this.props;

        if (!root) {
            setLoading();
            const root = await RequestsManager(requestName.GET_ROOT, sourceUrl);
            if (!root.errors) {
                didMount(root);
            }
            setLoaded();
        }

        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    handleResize = (e) => {
        const windowSize = window.innerWidth;
        const windowWidth = windowSize / 200;
        const levelWidth = Number((windowWidth).toFixed(0));
        this.props.addLevelWidth(levelWidth);
    };

    render(){
        const { root, maxColumnSize, loading } = this.props;
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
                    topOffset += paddingAmount;
                }

                for (let y = 0; y < levels[i][j].length; y++) {
                    const node = levels[i][j][y];
                    node.offset = ++topOffset;
                    let bottomOffset = NodeExplorer.getOpenedChildrenWidth(node);
                    topOffset += bottomOffset;
                    let bottomPadding = '';
                    
                    bottomPadding = NodeExplorer.generateEmptyNodes('pipe', bottomOffset);
                    balancedLevels[i] = [...balancedLevels[i], node, ...bottomPadding];
                }
                
            }
        }

        for (let i = balancedLevels.length - 1; i > 0; i--) {
            for (let j = 0; j < balancedLevels[i].length; j++) {
                const nodeLeft = balancedLevels[i - 1][j];
                const node = balancedLevels[i][j];

                if (!node.isEmpty && nodeLeft && nodeLeft.type) {
                    nodeLeft.type = 'line';
                }
            }
        }

        for (let i = balancedLevels.length - 1; i >= 0; i--) {
            let empty = true;
            let lastNode = true;
            for (let j = balancedLevels[i].length -1; j > 0; j--) {
                const node = balancedLevels[i][j];
                if (node && node.type) {
                    switch (node.type) {
                        case "pipe":
                            if (empty) {
                                node.type = 'space';
                            }
                            break;
                        case "line":
                            if (empty || lastNode) {
                                empty = false;
                                lastNode = false;
                                node.type = 'last-line';
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    lastNode = true;
                    empty = true;
                }
            }
        }

        const reducedBalancedLevels = balancedLevels.reverse().splice(0, maxColumnSize).reverse();

        let empty = 0;
        let end = true;
        while (end) {
            if (
                reducedBalancedLevels[0]
                 && reducedBalancedLevels[0][empty].type
                 && reducedBalancedLevels[0][empty].type === 'space'
            ) {
                ++empty;
            } else {
                end = false;
            }
        }

        const cols = reducedBalancedLevels.map((level, i) => (<Column key={i} nodes={level.splice(empty)} />));

        return (
            <div className="NodeMatrix__Container">
                {cols}
                <Modal />
                { loading ? <Spinner /> : null }
            </div>
        );
    }
}

export default connect(
    state => ({
        root: state.nodes.rootNode,
        width: state.matrix.matrixWidth,
        maxColumnSize: state.variables.maxColumnSize,
        loading: state.variables.loading,
        sourceUrl: state.variables.sourceUrl,
    }),
    dispatch => ({
        didMount:  (root) => {
            dispatch(loadRoot(root));
        },
        setLoading: () => {
            dispatch(setLoadingAction());
        },
        setLoaded: () => {
            dispatch(setLoadedAction());
        },
        addLevelWidth: (levelWidth) => {
            dispatch(addLevelWidth(levelWidth));
        },
    }),
)(NodeMatrix);

NodeMatrix.propTypes = {
    width: PropTypes.number.isRequired,
    root: PropTypes.shape(nodeProps),
    maxColumnSize: PropTypes.number.isRequired,
    setLoading: PropTypes.func.isRequired,
    didMount: PropTypes.func.isRequired,
};