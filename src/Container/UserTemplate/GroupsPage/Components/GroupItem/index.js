import React from 'react'
import {Link} from "react-router-dom"
function GroupItem(props) {


    const {data}=props;

    return (
        <Link to="/user/groupid"className="group__item my-3 mx-4 btn  shadow col-xl-2 col-lg-3 col-md-4 col-sm-4 col-10"> 
            <h4 style={{overflow:"hidden"}}>{data.ten}</h4>
            {/* <p style={{color:"black"}}>{data.siSo} Thành Viên</p> */}
            <hr/>
            <hr/>
        </Link>
    )
}

export default GroupItem;
