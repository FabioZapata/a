import React, { useState, useEffect } from 'react';
import './create-appointment.scss';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import * as appointmentService from '../../services/user.service';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Navbar from '../../components/navbar/Navbar';


// patientId: 1
// heartPressure: 8/10
// description: Segunda prueba
// file: IMAGE

const CreateAppointment = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [heartPressure, setHeartPresure] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
  const [fileName, setFileName] = useState('No has seleccionado ningún archivo');
  const [imgFile, setImgFile] = useState('');

  useEffect(() => {
    setName(props?.patient?.name || null);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFile = (event) => {
    if (event.target && event.target.files[0]) {
      console.log(event.target.files[0]);
      setFileName(event.target.files[0].name);
      setImgFile(event.target.files[0]);
    }
    console.log(fileName);
  }

  const handleSave = () => {
    const patientId = props.patient.id;
    const body = {
      patientId,
      heartPressure,
      description,
      imgFile,
    };

    // appointmentService.createAppointment(body).then(
    //   (response) => {
    //     // SUccess;
    //   }
    // ).catch(error => {
    //   console.log(error);
    // })


  }

  return (
    <div className="appointment-container">
      <Navbar />

      <div className="modal-container">
        <span className="title">Crear nueva Cita</span>
        <span className="sub-title">Paciente: {name}</span>
        <div className="fields">
          <TextField
            id="outlined-Dni"
            label="Presion arterial"
            type="text"
            className="text-field"
            autoComplete="current-name"
            variant="outlined"
            value={heartPressure}
            onChange={(e) => setHeartPresure(e.currentTarget.value)}
          />
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
          <div className="picker-group">
            <div class="picker">
              <input
                accept="image/*"
                className="input-d"
                id="contained-button-file"
                type="file"
                onChange={handleFile}

              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" className="upd" component="span">
                  Upload
                </Button>
              </label>
              <span className="file-name center">{fileName}</span>
            </div>
          </div>

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

    </div>
  );
};

export default CreateAppointment;