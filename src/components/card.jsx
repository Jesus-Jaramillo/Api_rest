import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom';
import '../styles/Home.css'
import { useState } from 'react';


function BasicCard() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Funcionando correctamente')
  }
  return (
    <div className='pad'>
      <div>
        <Box
          className="caja"
        >

          <form onSubmit={handleSubmit}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className='align'>
              <TextField id="outlined-basic" label="E-mail" variant="outlined" value={userName} type='email' onChange={({ target }) => setUserName(target.value)} />
            </Typography>
            <br />

            <Typography variant="h5" component="div" className='align'>
              <TextField id="outlined-basic" label="Password" variant="outlined" type='password' value={password} onChange={({ target }) => setPassword(target.value)} />
            </Typography>

            <br />
            <NavLink to="/pokemoncard">
            <Button type='submit' variant="outlined" color='success'>Iniciar Sesion</Button>
            </NavLink>

            <NavLink to="/register">
              <Button variant="outlined" color='primary'> Registrarse </Button>
            </NavLink>
          </form>
        </Box>
      </div>
    </div >
  );
}
export default BasicCard
