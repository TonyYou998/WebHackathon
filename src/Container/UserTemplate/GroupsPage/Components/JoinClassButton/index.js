import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actJoinClass } from '../../Modules/action';

function JoinClassButton() {
let dispatch=useDispatch();
  const [state,setState]=useState({
      ten:"",


  });
  const token=localStorage.getItem("public_key");
  const handleJoinClass=(e)=>{
    e.preventDefault();
      dispatch(actJoinClass(state,token));

  }


    return (
        <div>
  
  <button type="button" className="btn btn-warning ml-2" data-toggle="modal" data-target="#joinclassmodal">
    Tham Gia Lớp
  </button>
  
  <div className="modal fade" id="joinclassmodal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Tham Gia</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
           <input placeholder="Nhập tên lớp" className="w-100 join__input" onChange={(e)=>{
              setState({...state,ten:e.target.value});

           }}/>
        </div>
        <form className="modal-footer" onSubmit={handleJoinClass}>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Save changes</button>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default JoinClassButton
