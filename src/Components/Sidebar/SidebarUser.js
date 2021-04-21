import React from 'react'
import {Link} from "react-router-dom";
function SidebarUser() {
    return (
       <div className="sidebar__wrapper">
            <div className="web__name">
                    Social Study
            </div>
            <ul className="sidebar__nav">
                <ul>
                    <Link>
                        
                    </Link>
                </ul>                

                <div className="profile__icon">
                    <Link>
                    <span>
                            <i class="fa fa-user-circle"></i>
                        </span> 
                    </Link>
                </div>
               

                
            </ul>
        </div>
    )
}

export default SidebarUser
