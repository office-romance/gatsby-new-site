import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import { Link } from "gatsby";

class InfoPage extends Component {
  render() {
    return (
      <Layout>
        <div>
              <Link to="/">Home</Link>
        </div>
        <div>
          <h2 class="info">
                <p>The creative output of Ash Caplan. A designer working across media and messages. This website it the WIP showcase of the output from various projects. Currently self-initiated projects, the studio is looking to take on projects. These services/contributions can include (but not limited to):</p>
                      <ul>
                              <li>  Brand Architecture </li>

                              <li>  Environmental Design</li>

                              <li>  Experience and Event Design</li>

                              <li>  Business Design</li>

                              <li>  Information Architecture</li>

                              <li>  Experience Design</li>

                              <li>  Place-making</li>

                              <li>  Circular Design Strategy</li>

                              <li>  Feasability Studies</li>

                              <li>  Social Design</li>

                              <li>  Social Engagement Strategies</li>
                        </ul>
                    <a class="ext-link" href="http://instagram.com/romanceoffice">Instagram</a>
              </h2>
        </div>
      </Layout>
    );
  }
}

export default InfoPage;
