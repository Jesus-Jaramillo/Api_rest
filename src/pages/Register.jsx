import * as React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/Home.css";
import TextField from "@mui/material/TextField";
import Modal from '@mui/material/Modal';
/* import { useState } from "react"; */


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Register() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className='pad'>
      <Box
        className="caja"
      >

        <Typography variant="h5" component="div" className="align">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
          />
        </Typography>

        <br />

        <Typography variant="h5" component="div" className="align">
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            type="text"
          />
        </Typography>

        <br />

        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          className="align"
        >
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            type="email"
          />
        </Typography>

        <br />

        <Typography variant="h5" component="div" className="align">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
        </Typography>

        <br />
        <br />

        <NavLink to="/">
          <Button variant="outlined" color="error">
            {" "}
            Cancelar{" "}
          </Button>
        </NavLink>

        <Button variant="outlined" color='primary' onClick={handleOpen}>Registrar</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Los datos se han registrado con exito
            </Typography>

            <Typography>
              <NavLink to="/">
                <Button className="navigations" variant="outlined" color="success" > Aceptar </Button>
              </NavLink>
            </Typography>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}
export default Register;
