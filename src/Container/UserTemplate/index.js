import React from 'react'
import {Route, useHistory,Redirect} from "react-router-dom";
import SidebarUser from '../../Components/Sidebar/SidebarUser'
import SidebarUserMobile from '../../Components/SidebarUserMobile';





 function LayoutUser(props){
        let history=useHistory();
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
