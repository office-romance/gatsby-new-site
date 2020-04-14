import { Link } from "gatsby";
import "../styles/global.scss";
import Layout from "../layout/";
import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class AtlasPage extends Component {
  render() {
    return (
      <Layout>
        <div>
              <Link to="/">Home</Link>
        </div>
      </Layout>
    );
  }
}

export default AtlasPage;
