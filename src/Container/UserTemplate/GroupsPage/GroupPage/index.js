import React, { Fragment, useEffect } from 'react'
import Status from '../../HomePageUser/Status'
import Question from './Components/Question'
import ClassInfo from "./Components/ClassInfo";
import { useSelector } from 'react-redux';
import AddLesson from './Components/AddLesson';
import { RotateLeft } from '@material-ui/icons';
import $ from "jquery";
import LessonModal from './Components/LessonModal';
export default function GroupPage(props) {
        let data=useSelector(state=>state.userReducer.data);
    

        useEffect(()=>{
         if(data && data.role==="gv"){
    
                    $(".add_button").addClass("teacher");
                }
        })
   

    return (
        <div className="w-100 group__content">
            <div className="group__name   bg-light shadow py-4 pl-4  mr-5 d-flex">
                    <div>Thiết kế web</div>
                    <ClassInfo role={data && data.role}/>
            </div>
            <div className="put__question pl-md-5 mt-2">
               
                <LessonModal/>
                
            </div>
            <div class="pl-md-5 pt-4 all__conversation">
                {/* <Status/> */}
                <Question/>
                <Question/>
                {/* <Status/> */}
                {/* <Status/> */}
                {/* <Status/> */}

            </div>
           
           
                   
        </div>
        
    )
}
