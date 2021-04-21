import React from 'react'
import $ from 'jquery'; 
function SidebarUserMobile() {

    let flag=0;
    const showSidebar=()=>{
        
        if(flag===0){
            $(".sidebar__responsive  ").addClass("show");
            flag=1;
            // console.log("run");
        }
        else{
            $(".show").removeClass("show");
            //  $(".sidebar__responsive  ").addClass("close");
            flag=0;
        }
    }


    return (
        <div className="sidebarmobile" onClick={()=>{
            showSidebar();
        }}>
           
          {/* <img src="https://tix.vn/app/assets/img/icons/menu-options.png" alt /> */}
            <i class="fa fa-bars"></i>
        </div>
    )
}

export default SidebarUserMobile
