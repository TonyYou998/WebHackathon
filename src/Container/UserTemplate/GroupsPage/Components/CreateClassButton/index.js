import React from 'react'

function CreateClassButton() {
    return (
   <div>
  
  <button type="button" className="btn btn-success mr-2" data-toggle="modal" data-target="#exampleModalCenter">
    Tạo Học Lớp Mới
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
         <input placeholder="Class's name " className="w-100 create__input"/>
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

export default CreateClassButton
