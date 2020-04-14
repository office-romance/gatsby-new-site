import { Link } from "gatsby";
import "../styles/global.scss";
import Layout from "../layout/";
import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class RadioPage extends Component {
  render() {
    return (
      <Layout>
        <div>
              <Link to="/">Home</Link>
        </div>
        <section class="spotify-block">
              <iframe src="https://open.spotify.com/embed/playlist/7EZ011FtBdYPg7hh1frHgg" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </section>
      </Layout>
    );
  }
}

export default RadioPage;
