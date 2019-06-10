import loadRoot from '../actions/loadRootNodeAction';
import loadChildren from '../actions/loadChildrenAction';
import toggleChildren from '../actions/toggleChildrenAction';
import NodeExplorer from '../utils/NodeExplorer';
import generateNodes from '../utils/NodeGenerator';
import RequestsManager, { requestName } from '../utils/RequestsManager';

const rootNode = {
    id: "1",
    title: "Root",
    parent: "0",
    numberOfChildren: 3,
}

export default (state = { rootNode: null }, action) => {
    switch (action.type) {
        case loadRoot().type:
            // const root = rootNode;

            return {
                rootNode: { ...action.data }
            }
        case loadChildren(0).type: {
            const explorer = new NodeExplorer(NodeExplorer.clone(state.rootNode));
            // const children = generateNodes(3, action.parent);

            explorer.addChildren(action.parent, action.data);
            return {
                rootNode: explorer.getRoot()
            }
        }
        case toggleChildren(0).type: {
            const explorer = new NodeExplorer(NodeExplorer.clone(state.rootNode));
            explorer.toggleChildren(action.parent);            
            return {
                rootNode: explorer.getRoot()
            } 
        }  
        default:
            return state
    }
}

