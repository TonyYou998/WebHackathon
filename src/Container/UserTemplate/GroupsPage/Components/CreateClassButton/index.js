import { SettingsInputAntennaTwoTone } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actAddClassApi } from '../../Modules/action'

// import state from 'sweetalert/typings/modules/state'
import $ from "jquery";
function CreateClassButton() {

  


let [lopHoc,setLopHoc]=useState({
  ten:"",
  // lopId:"111",
  // siSo:0,
})
let dispatch=useDispatch();
let data=useSelector(state=>state.userReducer.data);



let token=localStorage.getItem("public_key");


const handleCreateClass=(e)=>{
        e.preventDefault();
        dispatch(actAddClassApi(lopHoc,token));
        
    }
  
 if(data && data.role==="hs")
      $(".btn-create").addClass("ActiveCreate")
    return (
   <div>
  
  <button type="button" className="btn btn-success mr-2 btn-create " data-toggle="modal" data-target="#exampleModalCenter">
    Tạo Lớp Học Mới
  </button>
  
  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Tạo Lớp Học Mới</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
         <input name="name" placeholder="Nhập tên lớp " className="w-100 create__input"
            onChange={(e)=>{
              setLopHoc({...lopHoc,ten:e.target.value});
            }}
         /> 
        </div>
        <form className="modal-footer" onSubmit={handleCreateClass}>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Save changes</button>
        </form>
      </div>
    </div>
  </div>
</div>

    )
}

export default CreateClassButton
