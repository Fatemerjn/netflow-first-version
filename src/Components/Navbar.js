import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/nav.css";

function Navbar() {

  return (
    <div>
      <nav className="nav">
        <Link className="title" to="/">
          Netflowai
        </Link>

        <ul>
          <li>
            <Link to="/app">App</Link>  
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/interface">Interface</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;