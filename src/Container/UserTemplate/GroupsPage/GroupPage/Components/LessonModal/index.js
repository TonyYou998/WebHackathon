import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from "axios";
import swal from 'sweetalert';
import Loader from '../../../../../../Components/Loader'

export default function LessonModal() {
  const [open, setOpen] = React.useState(false);

  const [documment,setDocumment] = useState({
      values: {
        tenBaiHoc:'',
        taiLieu:'',
        linkVideo:''
      },
      errors: {
        tenBaiHoc:'',
        taiLieu:'',
        linkVideo:''
      }
  })

  let handleChange = (e) => {
      const {name,value} = e.target;
      let errorMessage = "";
      if(value.trim() === "") {
          if(name === "tenBaiHoc") {
              errorMessage = "Tên bài học bắt buộc không được bỏ trống (*) ";
          }

          if(name === "linkVideo") {
            errorMessage = "Link video bài học bắt buộc không được bỏ trống (*)"
          }

          if(name === "taiLieu") {
            errorMessage = "Tài liệu bài học bắt buộc không được bỏ trống (*)"
          }
      }


      let newValues = {...documment.values,[name]:value};
      let newErrors = {...documment.errors,[name]:errorMessage};
      setDocumment({
        ...documment,
        values: newValues,
        errors: newErrors
      })

  }

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  let handleSubmit = (data) => {
      let promise = Axios({
        url:'http://192.168.43.223:8080/posts',
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('public_key')
        },
        data: JSON.stringify(data)
      })

      promise.then(res => {
        setState({loading:0});
        swal({
          title: "Thêm tài liệu thành công",
          text: "Cám ơn bạn đã dành thời gian để chuẩn bị!",
          icon: "success",
          button: "OK",
      })
     
        // setState({loading:0});
        window.location.reload();
      })

      promise.catch(err => {
        setState({loading:0});
        swal({
          title: "Thêm tài liệu thất bại",
          text: "Hãy kiểm tra lại thông tin!",
          icon: "error",
          button: "OK",
      })
      })

  }

  const [state,setState] = useState({loading:0})
  if(state.loading) return <Loader/>
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
       <div className=" add_button shadow " onClick={handleClickOpen}>
            <i class="fa fa-plus"></i>
        </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thêm tài liệu</DialogTitle>
        <DialogContent>
          <DialogContentText>
            nhập link tài liệu và video bài học
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
           <TextField onChange={handleChange}
            autoFocus
            margin="dense"
            id="title"
            label="tên bài học"
            type="text"
            fullWidth
            name='tenBaiHoc'
          />
          <p className='text-center text-danger'>{documment.errors.tenBaiHoc}</p>
            <TextField onChange={handleChange}
            autoFocus
            margin="dense"
            id="pdf"
            label="tài liệu"
            type="text"
            fullWidth
            name="taiLieu"
          />
           <p className='text-center text-danger'>{documment.errors.taiLieu}</p>
           <TextField onChange={handleChange}
            autoFocus
            margin="dense"
            id="video"
            label="link video"
            type="text"
            fullWidth
            name='linkVideo'
          />
           <p className='text-center text-danger'>{documment.errors.linkVideo}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
          
          <Button onClick={(e) => {
              e.preventDefault();
              let dataPost = {
                "videosLinkPath":[
                  {
                    "video":documment.values.linkVideo
                  }
                ],
                "pdfLinkPath":[{
                  "pdf":documment.values.taiLieu
                }],
                "moTa":documment.values.tenBaiHoc
              }
              setState({loading:1});
              handleSubmit(dataPost);
          }} color="primary">
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
