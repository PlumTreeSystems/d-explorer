export default (parent, requestUrl) => ({
    type: 'LOAD_CHILDREN_NODES',
    parent,
    requestUrl
});