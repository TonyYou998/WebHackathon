import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';


export default function ClassInfo() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button color="primary" className="mr-4" onClick={handleClickOpen('paper')}>Thông tin lớp học</Button>
     
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Thông tin lớp học</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <DialogTitle>Thông tin chung</DialogTitle>
              <Typography>Tên lớp:Thiết kế web</Typography>
            <Typography>Số lượng học viên:45</Typography>
                <Typography>Giảng viên:Ngô Minh Hiếu</Typography>



             <DialogTitle>Học viên đã xem hết bài giảng</DialogTitle>
              <Typography>Vưu Hoàng Phạm Tấn</Typography>
              <Typography>Nguyễn Phạm Lâm Duy</Typography>
              <Typography>Nguyễn Khải Đăng</Typography>
              <Typography>Dương Tuấn Bảo</Typography>
              <Typography>Nguyễn Văn Minh Hoàng</Typography>
                <Typography>Vưu Hoàng Phạm Tấn</Typography>
              <Typography>Nguyễn Phạm Lâm Duy</Typography>
              <Typography>Nguyễn Khải Đăng</Typography>
              <Typography>Dương Tuấn Bảo</Typography>
              <Typography>Nguyễn Văn Minh Hoàng</Typography>
                <Typography>Vưu Hoàng Phạm Tấn</Typography>
              <Typography>Nguyễn Phạm Lâm Duy</Typography>
              <Typography>Nguyễn Khải Đăng</Typography>
              <Typography>Dương Tuấn Bảo</Typography>
              <Typography>Nguyễn Văn Minh Hoàng</Typography>
                <Typography>Vưu Hoàng Phạm Tấn</Typography>
              <Typography>Nguyễn Phạm Lâm Duy</Typography>
              <Typography>Nguyễn Khải Đăng</Typography>
              <Typography>Dương Tuấn Bảo</Typography>
              <Typography>Nguyễn Văn Minh Hoàng</Typography>
                <Typography>Vưu Hoàng Phạm Tấn</Typography>
              <Typography>Nguyễn Phạm Lâm Duy</Typography>
              <Typography>Nguyễn Khải Đăng</Typography>
              <Typography>Dương Tuấn Bảo</Typography>
              <Typography>Nguyễn Văn Minh Hoàng</Typography>
               
                              


          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}
