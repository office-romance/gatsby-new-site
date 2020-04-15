import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">

        <div className="notice-container">
          <h4>{copyright}</h4>
          <img src={'/logos/Asset 1.png'} alt="Logo"/>
          <Link to={url}>
            <button>RSS</button>
          </Link>

        </div>

      </footer>
    );
  }
}

export default Footer;
