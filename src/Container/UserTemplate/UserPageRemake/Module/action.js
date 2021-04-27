import { data } from "jquery";
import { mainApi } from "../../../../Api";
import * as ActionType from "./constants";


export const actGetUserDataApi=(token)=>{
   
    // console.log(token);
    return (dispatch)=>{
    
        dispatch(actGetUserDataRequest());
        mainApi
        .get("/users/me",{headers:{ Authorization: `Bearer ${token}`}})
        .then((result)=>{
            dispatch(actGetUserDataSuccess(result.data));
            // console.log(result.data);
        })
        .catch(()=>{
            dispatch(actGetUserDataFailed());
            console.log("failed");
        })
    }
}

const actGetUserDataRequest=()=>{
    return {
        type:ActionType.GET_USER_DATA_REQUEST,

    }
}
const actGetUserDataSuccess=(data)=>{
    return{
        type:ActionType.GET_USER_DATA_SUCCESS,
        payload:data,
    }
}
const actGetUserDataFailed=(err)=>{
    return {
        type:ActionType.GET_USER_DATA_FAILED,
        payload:err,
    }
}
 export const actGetUserDataClear=()=>{
    return {
        type:ActionType.GET_USER_DATA_CLEAR,
    }
}
