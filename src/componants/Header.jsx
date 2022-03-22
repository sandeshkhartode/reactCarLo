import React from 'react'
import { NavLink } from "react-router-dom";
import Cartbtn from './buttons/Cartbtn';
import Login from './buttons/Login';
// import Signup from './buttons/Signup';
import './Header.css'


export default function Header() {   
 
  return (
    <div>     
      <nav className="navbar navbar-expand-lg navbar-dark fw-bold fixed-top" id='navdiv'>
        <div className="container-fluid " id='navfluid'>
          <img className="navbar-brand logoimg" src='/Assets/images/logo.jpg' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link headerli" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item"> 
                <NavLink className="nav-link headerli" to="/product">Products</NavLink>
              </li>                          
              <li className="nav-item">
                <NavLink className="nav-link headerli" to="/about">About</NavLink>
              </li>
              <li className="nav-item">  
                <NavLink className="nav-link headerli" to="/contact">Contact Us</NavLink>
              </li> 
            </ul>  
            <Login />
            {/* <Signup /> */}
            <Cartbtn />
          </div>
        </div>
      </nav>
    </div>
  )
}
