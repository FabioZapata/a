import React, { useState,useContext } from "react";
import "./new-password.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import * as LoginService from "../../services/AuthService";
// import UserContext from "../../context/UserContext";


const NewPassword = () => {

  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const handlePasswordChange = (e) => {
    e.persist();
    setPassword(e.currentTarget.value);
  }
  const handlePasswordConfChange = (e) => {
    e.persist();
    setPasswordConf(e.currentTarget.value);
  }

  
  const handleNewPassword = () => {
    const body = {
      password,
    };

    /*UserService.newPassword(body).then(
      (response) => {
        console.log(response);
        if(response){
        }
        else{
        }
      }
    )*/

  }

  return (
    <div className="new-password-main-container">
      <div className="header">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <span>Reestablecer contraseña</span>
      </div>
      <div className="fields">
        <span>Digita la contraseña dos veces para actualizarla</span>
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
          onClick={handleNewPassword}
        >
          Cambiar contraseña
        </Button>
      </div>
    </div>
  );
};

export default NewPassword;