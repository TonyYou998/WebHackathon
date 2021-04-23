import React from 'react'
import {Link} from "react-router-dom"
function GroupItem() {
    return (
        <Link to="/user/groupid"className="group__item my-3 mx-4 btn  shadow col-xl-2 col-lg-3 col-md-4"> 
            <h4>Web Design</h4>
            <p style={{color:"black"}}>45 Members</p>
            <hr/>
            <hr/>
        </Link>
    )
}

export default GroupItem;
