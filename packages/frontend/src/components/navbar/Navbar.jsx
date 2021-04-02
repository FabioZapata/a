import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/caduceus-symbol.svg';
import Logout from '../../assets/logout.svg';
import LogoutOnHover from '../../assets/logoutOnHover.svg';
import './Navbar.scss'

const Navbar = () => {

  const [logout, setLogout] = useState(Logout);

  const handlelogout = () => {
    console.log("TODO LOGOUT");
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
      <div className="logout">
        <span
          onMouseEnter={() => setLogout(LogoutOnHover)}
          onMouseLeave={() => setLogout(Logout)}
          onClick={handlelogout}
        >Salir</span>
        <img
          src={logout}
          alt="Logout"
          onMouseEnter={() => setLogout(LogoutOnHover)}
          onMouseLeave={() => setLogout(Logout)}
          onClick={handlelogout}
        />
      </div>
    </div>
  )
};

export default Navbar;