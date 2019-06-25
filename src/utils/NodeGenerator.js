import shortid from 'shortid';
export default (number, parent) => {
    let nodes = [];
    for (let i = 0; i < number; i++){
        const id = shortid.generate();
        nodes = [...nodes, {
            id: id,
            title: id,
            // showChildren: false,
            // children: [],
            parent,
            numberOfChildren: i,
        }];
    }
    return nodes;
}