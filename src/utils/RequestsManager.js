import axios from 'axios';

export default (requestType, url) => {
    switch (requestType) {
        case requestName.GET_CHILDREN:
            axios.get(url)
                .then(function (response) {
                    return response;
                })
                .catch(function () {
                    return {
                        errors: ["Request failed"]
                    };
                });
        case requestName.GET_ROOT:
            axios.get(url)
                .then(function (response) {
                    return response;
                })
                .catch(function () {
                    return {
                        errors: ["Request failed"]
                    };
                });
        default:
            return {
                errors: ["Request not found"]
            }
    }
}

export const requestName = {
    GET_CHILDREN: 'get_children',
    GET_ROOT: 'get_root'
}
