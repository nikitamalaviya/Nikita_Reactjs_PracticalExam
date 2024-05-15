import axios from "axios"
import { Base_url } from "../../Constant"

let getData = async (action) => {
    console.log(action, "api mathi data");
    let { endpoint } = action;
    const res = await axios.get(Base_url + endpoint);
    let data = res.data;
    let status = res.status;
    return { data, status };
}

let postData = async (action) => {
    console.log(action, "post data api");
    let { endpoint } = action;
    console.log(action);
    const res = await axios.post(Base_url + endpoint, action.payload);
    let data = res.data;
    let status = res.status;
    return { data, status };
}


export { getData, postData } 