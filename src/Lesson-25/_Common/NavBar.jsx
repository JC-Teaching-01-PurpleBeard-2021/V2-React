import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="sidenav">
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/page1">
              Page 1
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/page2">
              Page 2
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/page3">
              Page 3
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
