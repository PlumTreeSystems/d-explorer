import { type } from "os";

import reducers from "../reducers";

export default class NodeExplorer {
    constructor(root){
        this.root = root;
    }

    findNode(id){
       
        return NodeExplorer.findInTree(this.root, id);
    }    

    addChildren(parent, children){
        const node = NodeExplorer.findInTree(this.root, parent);
        node.children = [...node.children, ...children];        
    }

    toggleChildren(id){
        const node = NodeExplorer.findInTree(this.root, id);
        return node.showChildren = !node.showChildren;
    }

    getRoot(){
        return this.root;
    }

    static clone(root){
        return JSON.parse(JSON.stringify(root));
    }

    static getLevels(node){
        let bottom = false;
        let levels = [ [[node]] ];
        let index = 0;
        while(!bottom){
            let lastLevel = levels[index].reduce((nodes, set) => [...nodes, ...set], []);
            
            let newLevel = lastLevel.reduce((children, node) => {
                node.children.forEach(child => {
                    child.parentNode = node;
                });
                return node.children.length && node.showChildren ? [...children, node.children] : children;
            }, [])
            if (newLevel.length > 0){
                levels[++index] = newLevel;
            }
            else {
                bottom = true;
            }
        }
        return levels;
    }

    static generateEmptyNodes(type, amount){
        const nodes = [];
        for (let i = 0; i < amount; i++){
            nodes.push({isEmpty: true, type});
        }
        return nodes;
    }

    static getOpenedChildrenWidth(node){
        if (!node.showChildren || node.children.length == 0){
            return 0;
        }
        return node.children.length + node.children.reduce((sum, child) => (NodeExplorer.getOpenedChildrenWidth(child) + sum), 0);
    }

    static getChildren(nodes){
        nodes.reducers((children, node) => [...children, ...node.children],  )
    }


    static findInTree(node, id){
        if (node.id == id){
            return node;
        }
        for(let i = 0; i < node.children.length; i++){
            const needle = NodeExplorer.findInTree(node.children[i], id);
            if (needle){
                return needle;
            }
        }
        return null;
    }
}