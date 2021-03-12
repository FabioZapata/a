import React, { useState,useContext } from "react";
import "./forgot.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import * as LoginService from "../../services/AuthService";
// import UserContext from "../../context/UserContext";
import {Link} from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Forgot = () => {

  const [email, setEmail] = useState('');
  //const setAuthState = useContext(UserContext).setAuthState;

  const handleEmailChange = (e) => {
    e.persist();
    setEmail(e.currentTarget.value);
  }
  
  const handleForgot = () => {
    console.log(email);
    const body = {
      "email": email,
    };

    /*LoginService.login(body).then(
      (response) => {
        console.log(response);
        if(response){
          localStorage.setItem("token", response.access_token);
          localStorage.setItem("user", body.email);
          setAuthState({user: email, reported: true});
          console.log(setAuthState.authState);
          window.location.href = '/';
        }
        else{
          setOpen(true);
          console.log("Login failed");
        }
      }
    )*/

  }

  return (
    <div className="forgot-main-container">
      <div className="header">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <span>Recuperar Contraseña</span>
      </div>
      <div className="fields">
        <span>Escribe tu email para recuperar tu contraseña</span>
        <TextField
          id="outlined-email-input"
          label="Email *"
          type="email"
          className="text-field"
          autoComplete="current-email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <Button
          variant="contained" 
          className="btn-login"
          onClick={handleForgot}
        >
          Enviar Correo
        </Button>
        <div className="messages">
          <Link className="link right" to="register">
            <span>No tienes cuenta? Registrate</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forgot;