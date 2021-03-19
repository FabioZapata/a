import React, { useState,useContext } from "react";
import "./show-appointment.scss";
import { DataGrid } from '@material-ui/data-grid';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';


const ShowAppointments = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nombre Completo', width: 150 },
    {
      field: 'age',
      headerName: 'Edad',
      type: 'number',
      width: 90,
    },
    {
      field: 'date',
      headerName: 'fecha',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 180,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div className="patients-list-main-container">
      <span className="title">Mis Citas</span>
      <div className="table-container">
        <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection />
      </div>
      <div className="btn-grp">
        <Button
          variant="contained" 
          className="btn primary"
          component={Link} to={'/patient/new'}        

        >
          Crear paciente
        </Button>
         <Button
          variant="contained" 
          className="btn secondary"
          component={Link} to={'/appointment/new'}        

        >
          Crear Cita
        </Button>
      </div>

    </div>
  );
};

export default ShowAppointments;