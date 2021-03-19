import React, {useState } from 'react';
import './create-patient.scss';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const CreatePatient = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [dni, setDni] = useState('');


  const handleSave = () => {
    console.log(name);
    console.log(lastName);
    console.log(age);
  }
  
  return (
    <div className="patient-container">
      <span className="title">Crear nuevo paciente</span>
      <div className="fields">
        <TextField
          id="outlined-first-name"
          label="Nombre"
          type="text"
          className="text-field"
          autoComplete="current-name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)} 
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
        <TextField
          id="outlined-age"
          label="Edad"
          type="number"
          className="text-field"
          autoComplete="edad"
          variant="outlined"
          value={age}
          onChange={(e) => setAge(e.currentTarget.value)} 
        />
        <TextField
          id="outlined-age"
          label="Edad"
          type="number"
          className="text-field"
          autoComplete="edad"
          variant="outlined"
          value={dni}
          onChange={(e) => setDni(e.currentTarget.value)} 
        />
        </div>
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