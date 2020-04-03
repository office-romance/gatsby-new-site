import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "gatsby";

const Sidebar = () => {
  <sidebar>
        <nav>
              <ul>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
              </ul>
        </nav>
  </sidebar>
}
export default Sidebar;
