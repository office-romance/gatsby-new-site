import React from "react"
import { Link } from "gatsby";
import "../styles/global.scss";
import Layout from "../layout/";

const HomePage = () => {
  return  <div>
    <Layout>
      <nav>
        <ul>
          <li>
                <Link to="/info/">Info</Link>
          </li>
          <li>
                <Link to="/work/">Work</Link>
          </li>
          <li>
                <Link to="/atlas/">Atlas</Link>
          </li>
          <li>
                <Link to="/radio/">Radio</Link>
          </li>
        </ul>
      </nav>
    </Layout>
  </div>
  }

export default HomePage
