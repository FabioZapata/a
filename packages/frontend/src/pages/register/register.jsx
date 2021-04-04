import React, { useState, useContext } from "react";
import "./register.scss";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import * as RegisterService from '../../services/register.service';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    '&:before': {
      borderColor: 'white',
    },
    '&:after': {
      borderColor: 'white',
    }
  },
}));

// import UserContext from "../../context/UserContext";

// import * as RegisterService from "../../services/RegisterService";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// "firstName": "Jorge",
//         "lastName": "Vargas",
//         "email": "jorgevargas@hotmail.com",
//         "password": "1234",
//         "carnet": "f12345113",
//         "gender": "Male"

const Register = (props) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [carnet, setCarnet] = useState('');
  const [gender, setGender] = useState('');
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
    if (password === passwordConf && validateEmail) {
      console.log(gender);
      const body = {
        firstName,
        lastName,
        email,
        password,
        carnet,
        gender,
      };
      console.log(body);

      RegisterService.create(body).then(
        (response) => {
          console.log(response);
          if (response.message === 'Created') {
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setCarnet('');
            setGender('');
            setOpen(true);
            setTimeout(() => {
              window.location.href = '/';
            }, 1500);
          }
        }
      ).catch(error => console.log(error));
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
        <div className="imc">
          <TextField
            id="outlined-height-input"
            label="Nombre *"
            type="text"
            className="text-field double"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="outlined-weight-input"
            label="Apellido *"
            type="text"
            className="text-field double"
            variant="outlined"
            value={lastName}

            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="imc">
          <TextField
            id="outlined-height-input"
            label="Carnet *"
            type="number"
            className="text-field double"
            variant="outlined"
            value={carnet}
            onChange={(e) => setCarnet(e.target.value)}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Genero</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={gender}
              className={classes.select}
              onChange={(e) => setGender(e.target.value)}
              label="Genero"
            >
              <MenuItem value={"Male"}>Hombre</MenuItem>
              <MenuItem value={"Female"}>Mujer</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          id="outlined-email-input"
          label="Email *"
          type="email"
          className="text-field start"
          autoComplete="current-email"
          variant="outlined"
          value={email}
          error={`${!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email))}`}
          helperText={`${!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)) ? "Email incorrecto" : ""}`}
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
          helperText={(password !== '' && password !== passwordConf) ? "Las contraseñas no coinciden" : ""}
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