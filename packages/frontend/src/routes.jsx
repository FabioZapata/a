import React, { useContext } from 'react';
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
import AuthContext from './contexts/AuthProvider';

const Routes = () => {
  const isAuth = () => {
    console.log(localStorage.getItem("session-user"));
    return localStorage.getItem("session-user") !== undefined;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {
            isAuth ? <ShowPatients />
              : <Login />

          }
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
        <PrivateRoute>
          <Route exact path="/patient/new">
            <CreatePatient />
          </Route>
        </PrivateRoute>
        <PrivateRoute>
          <Route exact path="/patients">
            <ShowPatients />
          </Route>
        </PrivateRoute>
        <PrivateRoute>
          <Route exact path="/appointments">
            <ShowAppointments />
          </Route>
        </PrivateRoute>
        <PrivateRoute>
          <Route exact path="/appointment/new">
            <CreateAppointment />
          </Route>
        </PrivateRoute>
        <PrivateRoute>
          <Route path="/appointment/new/:id">
            <CreateAppointment />
          </Route>
        </PrivateRoute>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default Routes;