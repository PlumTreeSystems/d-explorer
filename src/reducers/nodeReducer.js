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

export default async (state = { rootNode: null }, action) => {
    switch (action.type) {
        case loadRoot().type:
            const root = await RequestsManager(requestName.GET_ROOT, action.requestUrl);
            // const root = rootNode;

            console.log(root);
            if (root.errors) {
                return state;
            }

            console.log({
                rootNode: { ...root }
            });
            return {
                rootNode: { ...root }
            }
        case loadChildren(0).type: {
            const explorer = new NodeExplorer(NodeExplorer.clone(state.rootNode));
            // const children = generateNodes(3, action.parent);
            const url = action.requestUrl + `?id=` + action.parent;
            const children = await RequestsManager(requestName.GET_CHILDREN, url);
            
            if (children.errors) {
                return state;
            }

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

