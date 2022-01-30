import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AuthForm from './AuthForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  borderRadius:'40px',
  boxShadow: 24,
  p: 4,
};



export default function BasicModal({title, buttonTxt, type}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{buttonTxt}</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
         <img src="https://img.icons8.com/fluency/344/close-window.png" style={{height:'40px', cursor:'pointer', float:'right'}} onClick={handleClose} alt="close" />
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}> 
            {content} */}
            <AuthForm type={type} />
          {/* </Typography> */}
          {/* <button className='btn btn-outline-primary' onClick={handleClose}>close</button> */}
         </Box> 
      </Modal>
    </div>
  );
}
