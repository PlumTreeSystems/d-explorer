import loadRoot from '../actions/loadRootNodeAction';
import loadChildren from '../actions/loadChildrenAction';
import toggleChildren from '../actions/toggleChildrenAction';
import NodeExplorer from '../utils/NodeExplorer';
import generateNodes from '../utils/NodeGenerator';


const rootNode = {
    id: "1",
    title: "Root",
    parent: "0",
    children: [],
    showChildren: false,    
}

export default (state = { rootNode: null }, action) => {
    switch (action.type) {
        case loadRoot().type:
            return {
                rootNode
            }
        case loadChildren(0).type: {
            const explorer = new NodeExplorer(NodeExplorer.clone(state.rootNode));
            const children = generateNodes(3, action.parent);
            explorer.addChildren(action.parent, children);
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

