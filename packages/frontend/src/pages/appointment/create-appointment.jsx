import React, {useState } from 'react';
import './create-appointment.scss';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const CreateAppointment = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [dni, setDni] = useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSave = () => {
    console.log(name);
    console.log(lastName);
    console.log(age);
  }
  
  return (
    <div className="appointment-container">
      <span className="title">Crear nueva Cita</span>
      <div className="fields">
        <TextField
          id="outlined-Dni"
          label="Dni"
          type="number"
          className="text-field"
          autoComplete="current-name"
          variant="outlined"
          value={dni}
          onChange={(e) => setDni(e.currentTarget.value)} 
        />
        <div class="picker">
          <input
            accept="image/*"
            className="input-d"
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" className="upd" component="span">
              Upload
            </Button>
          </label>

        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Fecha de la cita"
            format="MM/dd/yyyy"
            className="date-picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Hora de la cita"
            value={selectedDate}
            className="date-picker"
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </MuiPickersUtilsProvider>



        </div>
        <div className="btn-grp">
        <Button
          variant="contained" 
          className="btn secondary"
          component={Link} to={'/appointments'}        
        >
          Cancelar
        </Button>
         <Button
          variant="contained" 
          className="btn primary"
          onClick={handleSave}
        >
          Crear Cita
        </Button>
        </div>
    </div>
  );
};

export default CreateAppointment;