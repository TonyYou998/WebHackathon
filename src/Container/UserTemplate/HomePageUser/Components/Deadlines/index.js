import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
export default function DeadlinesButton() {
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
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
        <Button
                  className="mb-md-0   w-100 text-light bg-danger text-center center rounded overflow-hidden"
                  style={{ height: 100 }}
                  onClick={handleClickOpen('paper')}
                >
                  <div className="row">
                    <div className="col-12">
                      <h3 className="pt-2">10 Deadline</h3>
                    </div>
                    <div className=" d-none d-md-block col-12">
                      <hr className="bg-light my-2" />
                    </div>
                    <div className="d-none d-md-block col-12">
                      <p className="m-0 pb-2">Xem chi tiết</p>
                    </div>
                  </div>
                </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Deadlines</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
           <Typography>Cấu trúc dữ liệu và giải thuật</Typography>
           <Typography>Lập trình hệ thống lab2</Typography>
           <Typography>Lập trình mạng lab4</Typography>
           <Typography>Lập trình Web lab5</Typography>
            <Typography>Cấu trúc dữ liệu và giải thuật</Typography>
           <Typography>Lập trình hệ thống lab2</Typography>
           <Typography>Lập trình mạng lab4</Typography>
           <Typography>Lập trình Web lab5</Typography>
            <Typography>Cấu trúc dữ liệu và giải thuật</Typography>
           <Typography>Lập trình hệ thống lab2</Typography>
           <Typography>Lập trình mạng lab4</Typography>
          
          

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
