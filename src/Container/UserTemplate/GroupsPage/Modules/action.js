import { data } from "jquery";
import { mainApi, mockApi } from "../../../../Api";
import * as ActionType from "./constants";
import swal from 'sweetalert';
export const actGetListGroupsApi=()=>{
        return(dispatch)=>{
           
            dispatch(actGetListGroupsRequest());
            mainApi
            .get("/groups")
            .then((result)=>{
                    dispatch(actGetListGroupsSuccess(result.data));

                

            })
            .catch((err)=>{
                    dispatch(actGetListGroupsFailed(err))
                    console.log(err);
            })
        }
}
const actGetListGroupsRequest=()=>{
        return {
            type:ActionType.GET_LIST_GROUPS_REQUEST,
        }
}
const actGetListGroupsSuccess=(data)=>{
    return {
        type:ActionType.GET_LIST_GROUPS_SUCCESS,
        payload:data,
    }
}
const actGetListGroupsFailed=(err)=>{
     return {
        type:ActionType.GET_LIST_GROUPS_FAILED,
        payload:err,
    }
}
export const actAddClassApi=(data,token)=>{
   return(dispatch)=>{
            //  console.log(data);
            mainApi
            .post("/groups",data,
              {headers: { Authorization: `Bearer ${token}` }}
                   
            )
            .then((result)=>{
                    // dispatch(actGetListGroupsSuccess(result.data));
                            swal({
                    title: "Tham gia lớp thành công",
                    text: "hãy refresh lại",
                    icon: "success",
                    button: "OK",
                });

                

            })
            .catch((err)=>{
                  
                    console.log(err);
            })
        }

}

export  const actJoinClass=(data,token)=>{
 
     return(dispatch)=>{
            
            mainApi
            .post("/groups/member",data,
              {headers: { Authorization: `Bearer ${token}` }}
                   
            )
            .then((result)=>{
                  
                   swal({
                    title: "Thêm lớp thành công",
                    text: "hãy refresh lại",
                    icon: "success",
                    button: "OK",
                });
                   
                

            })
            .catch((err)=>{
                  
                   
            })
        }       
}
