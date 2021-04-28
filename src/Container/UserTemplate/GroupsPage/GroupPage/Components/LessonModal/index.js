import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function LessonModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
           <TextField
            autoFocus
            margin="dense"
            id="title"
            label="tên bài học"
            type="text"
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="pdf"
            label="tài liệu"
            type="text"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="video"
            label="link video"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
          
          <Button onClick={handleClose} color="primary">
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
