import React from 'react'
import {Link} from "react-router-dom";
function SidebarUser() {
    return (
       <div className="sidebar__wrapper shadow  bg-white rounded">
           <div className="sidebar-avatar pt-5">
               <div className="container text-center">
                     <img src="https://courses.uit.edu.vn/theme/image.php?theme=boost&component=core&rev=1614229684&image=u%2Ff1" alt />
                     <h5 style={{color:"#5d64a5",fontWeight:"700"}} className="pt-2">Tan Vuu</h5>
                     <h6 >Teacher</h6>
               </div>
              

           </div>
           <div className="sidebar-li pl-2">
                <ul>

                    <Link to="/user/homepage" >

                            <li  className="shadow-sm  pt-4 bg-white " >
                      
                        <span><i class="mx-2 fa fa-home"></i></span>Home 
                        
                       
                             </li>
                    </Link>
                     <Link to="/user/message">

                            <li  className="shadow-sm  pt-4 bg-white " >
                        <span><i class="mx-2 fas fa-comments"></i>Message</span>
                        
                       
                             </li>
                    </Link>
                     <Link to="/user/group">

                            <li  className="shadow-sm  pt-4 bg-white " >
                    <span><i class="mx-2 fa fa-users"></i></span>Groups
                        
                       
                             </li>
                    </Link>
                     <Link to="/user/quiz">

                            <li  className="shadow-sm  pt-4 bg-white " >
                     
                            <span><i class="mx-2 fas fa-fighter-jet"></i></span>Quiz
                        
                       
                             </li>
                    </Link>
               
                </ul>
               
           </div>

           <div className="sidebar-logout pl-2">
                 <ul>
                    <Link to="/user/profile">

                            <li  className="shadow-sm  pt-4 bg-white " >
                      
                            <span><i class=" mx-2 fa fa-user"></i></span>Profile
                        
                       
                             </li>
                    </Link>
                    <Link>

                            <li  className="shadow-sm  pt-4 bg-white " >
                      
                            <span><i class="fa fa-sign-in-alt"></i></span>Logout
                        
                       
                             </li>
                    </Link>
                </ul>
           </div>



        </div>
    )
}

export default SidebarUser
