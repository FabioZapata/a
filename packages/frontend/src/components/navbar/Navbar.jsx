import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/caduceus-symbol.svg';
import Logout from '../../assets/logout.svg';
import LogoutOnHover from '../../assets/logoutOnHover.svg';
import Login from '../../assets/login.svg';
import LoginOnHover from '../../assets/loginOnHover.svg';
import './Navbar.scss'
import * as authService from '../../services/auth.service';

const Navbar = () => {

  const [logout, setLogout] = useState(Logout);
  const [login, setLogin] = useState(Login);
  const [isLogged, setIsLogged] = useState(true);
  const handlelogout = () => {
    authService.logout();
    setIsLogged(!isLogged);
  }

  return (
    <div className="navbar-main-container center">
      <div className="logo">
        <Link to="/">
          <img src={Logo} on alt="logo" />
        </Link>
      </div>
      <div className="categories">
        <Link to="/patients" className="category">
          Mis pacientes
        </Link>
        <Link to="/appointments" className="category">
          Mis citas
        </Link>
      </div>
      {isLogged ? <div className="logout">
        <Link to="/login">
          <span
            onMouseEnter={() => setLogout(LogoutOnHover)}
            onMouseLeave={() => setLogout(Logout)}
            onClick={handlelogout}
          >Salir</span>
        </Link>
        <Link to="/login">
          <img
            src={logout}
            alt="Logout"
            onMouseEnter={() => setLogout(LogoutOnHover)}
            onMouseLeave={() => setLogout(Logout)}
            onClick={handlelogout}
          />
        </Link>
      </div> : null}
      { !isLogged ?
        <div className="logout">
          <Link to="/login">
            <span
              onMouseEnter={() => setLogin(LoginOnHover)}
              onMouseLeave={() => setLogin(Login)}
            >Entrar</span>
          </Link>
          <Link to="/login">
            <img
              src={login}
              alt="Login"
              onMouseEnter={() => setLogin(LoginOnHover)}
              onMouseLeave={() => setLogin(Login)}
            />
          </Link>
        </div>
        : null}
    </div>
  )
};

export default Navbar;