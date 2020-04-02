import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <div className="contact-container">
          <Helmet title={`Contact | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
  }
}

export default ContactPage;
