import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <nav className="sidenav">
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/lesson21">
              Lesson 21
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/lesson22">
              Lesson 22
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/lesson23">
              Lesson 23
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/lesson24">
              Lesson 24
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/lesson25">
              Lesson 25
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
