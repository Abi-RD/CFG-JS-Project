// creating the navbar and styling it

import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-light bg-info">
        <div className="container">
            <NavLink className="navbar-brand" to="/">
                PICK-n-SCOOP
            </NavLink>
                <div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Home
                        <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/recipes">
                            Recipes
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contactUs">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
