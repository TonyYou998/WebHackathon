import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Route, useHistory,Redirect} from "react-router-dom";
import SidebarUser from '../../Components/Sidebar/SidebarUser'
import SidebarUserMobile from '../../Components/SidebarUserMobile';
import { actGetUserDataApi } from './UserPageRemake/Module/action';





 function LayoutUser(props){
    let dispatch=useDispatch();
    
    let data=useSelector(state=>state.userReducer.data);
        let history=useHistory();
    let token=localStorage.getItem("public_key") ;
     useEffect(()=>{
      
      if(!data){
          dispatch(actGetUserDataApi(token));
         
      }
        


    },[]);
        if(!localStorage.getItem("public_key"))
            return <Redirect to="/dangnhap" />
        const renderSideBar=()=>{
            return <SidebarUser/>
        }
        const renderSidebarMobile=()=>{
            return <SidebarUserMobile/>
        }
        return (
            <div className="d-flex">

                {renderSideBar()}
                {renderSidebarMobile()}
                {props.children}
            </div>
        )


}
export default function UserTemplate({Component,...props}) {
          return (
    <Route
         {...props}
        render={(propsComponent) => (
            <LayoutUser>
            <Component {...propsComponent} />
            </LayoutUser>
        )}
    />
    )

   
  
    }
