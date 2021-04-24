import React from 'react'

function JoinClassButton() {
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
           <input placeholder="Nhập mã lớp" className="w-100 join__input"/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default JoinClassButton
