import React from 'react'
import logo from './../../Static/Images/logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="row">
      <div className="header">
        <div className="logo-wrap">
          <img src={logo} alt="logo" />
        </div>
        <div className="heading">
          <h3 className="no-pad no-marg">IPC EBENEZER UDAYANAGAR</h3>
          <p className="no-pad no-marg">Thus far the LORD has helped us.</p>
        </div>
        <div className="navbar-custom">
          <NavLink to='/'> Home </NavLink>
          <NavLink to='/photos'> Photos </NavLink>
          <NavLink to='/events'> Events </NavLink>
          <NavLink to='/family'> Family </NavLink>
          <NavLink to='/about'> About Us </NavLink>
          <NavLink to='/contacts'> Contacts </NavLink>
        </div>
      </div>
    </div>
  )
}
