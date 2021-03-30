import React, {useState } from 'react';
import './create-patient.scss';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  
}));

const CreatePatient = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(gender);
    console.log(description);
  }
  
  return (
    <div className="patient-container">
      <span className="title">Crear nuevo paciente</span>
      <div className="fields">
        <div className="imc">
          <TextField
            id="outlined-first-name"
            label="Nombre"
            type="text"
            className="text-field"
            autoComplete="current-name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)} 
          />
          <TextField
            id="outlined-last-name"
            label="Apellido"
            type="text"
            className="text-field"
            autoComplete="apellido"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)} 
          />

        </div>
        <TextField
          id="outlined-textarea"
          label="Descripcion"
          placeholder="Placeholder"
          multiline
          value={description}
          className="text-area"
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
        />
        </div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
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
        
        <div className="btn-grp">
        <Button
          variant="contained" 
          className="btn secondary"
          component={Link} to={'/patients'}        
        >
          Cancelar
        </Button>
         <Button
          variant="contained" 
          className="btn primary"
          onClick={handleSave}
        >
          Crear Paciente
        </Button>
        </div>
    </div>
  );
};

export default CreatePatient;