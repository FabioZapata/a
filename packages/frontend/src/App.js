import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Forgot from './pages/forgot/forgot';
import NewPassword from './pages/newPassword/new-password';


function App() {
  return (
    <div className="App">
       <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
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
    </div>
  );
}

export default App;
