import axios from 'axios';

export default async (requestType, url) => {
    let response = {};

    switch (requestType) {
        case requestName.GET_ROOT:
            console.log(url);
            response = await axios.get(url);
            break;
        case requestName.GET_CHILDREN:
            response = await axios.get(url);
            break;
        default:
            return {
                errors: ["Request not found"]
            }
        }
    
    console.log("request manager", response);
    return response.data;
}

export const requestName = {
    GET_CHILDREN: 'get_children',
    GET_ROOT: 'get_root'
}
