import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import PrivateRoute from './guards/privateRoute';

import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Forgot from './pages/forgot/forgot';
import NewPassword from './pages/newPassword/new-password';
import ShowPatients from './pages/patient/show-patients';
import CreatePatient from './pages/patient/create-patient';
import ShowAppointments from './pages/appointment/show-appointment';
import CreateAppointment from './pages/appointment/create-appointment';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ShowPatients />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/forgot">
        <Forgot />
      </Route>
      <Route exact path="/renew-password">
        <NewPassword />
      </Route>
      <Route exact path="/patient/new">
        <CreatePatient />
      </Route>
      <Route exact path="/patients">
        <ShowPatients />
      </Route>
      <Route exact path="/appointments">
        <ShowAppointments />
      </Route>
      <Route exact path="/appointment/new">
        <CreateAppointment />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Routes;