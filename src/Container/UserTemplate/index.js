import React from 'react'
import {Route} from "react-router-dom";
import SidebarUser from '../../Components/Sidebar/SidebarUser'





 function LayoutUser(props){

        const renderSideBar=()=>{
            return <SidebarUser/>
        }
        return (
            <div className="d-flex">

                {renderSideBar()}
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
