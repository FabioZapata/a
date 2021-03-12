import React, { useState,  useContext } from "react";
import "./register.scss";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// import UserContext from "../../context/UserContext";

// import * as RegisterService from "../../services/RegisterService";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  // const setAuthState = useContext(UserContext).setAuthState;
 


  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleEmailChange = (e) => {
    e.persist();
    setEmail(e.currentTarget.value);
  }
  
  const handlePasswordChange = (e) => {
    e.persist();
    setPassword(e.currentTarget.value);
  }
  const handlePasswordConfChange = (e) => {
    e.persist();
    setPasswordConf(e.currentTarget.value);
  }

  const validateEmail = () => {
    if (email === '') return true;
    return !(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email));
  }

  const handleRegister = () => {
    if(password === passwordConf && validateEmail){
        const body = {
          "email": email,
          "password": password,
        };
        
        /*RegisterService.create(body).then(
          (response) => {
            if(response.access_token){
              setPassword('');
              setEmail('');
              setOpen(true);
              setAuthState({ user: email, reported: true });
              setTimeout( ()=>{
                window.location.href = '/';

                //props.history.push("/");
              }, 1500);
            }
          }
        );
        */
    }
    
  }
  return (
    <div className="register-main-container">
      <div className="header">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <span>Registrarse</span>
      </div>
      <div className="fields">
        <TextField
          id="outlined-email-input"
          label="Email *"
          type="email"
          className="text-field start"
          autoComplete="current-email"
          variant="outlined"
          value={email}
          error={`${!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email))}`}
          helperText={`${!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email))? "Email incorrecto": ""}`}
          onChange={handleEmailChange}
        />
        <TextField
          id="outlined-password-input"
          label="Contraseña *"
          type="password"
          className="text-field"
          autoComplete="current-password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <TextField
          id="outlined-conf-password-input"
          label="Confirmar contraseña *"
          type="password"
          className="text-field"
          autoComplete="current-password"
          variant="outlined"
          value={passwordConf}
          error={password !== '' && password !== passwordConf}
          helperText={(password !== '' && password !== passwordConf) ? "Las contraseñas no coinciden" : "" }
          onChange={handlePasswordConfChange}
        />
        <Button
          variant="contained" 
          className="btn-login"
          onClick={handleRegister}
        >
          Registrarse
        </Button>
        <div className="messages">
          <Link className="link right" to="login">
            <span>Tienes cuenta? Inicia sesión</span>
          </Link>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Registro existoso
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;