import { Link, graphql } from "gatsby";
import "../styles/portfolio.css";
import Layout from "../layout/";
import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import SEO from '../components/seo/seo';

export const query = graphql`
  {
    allSanitySampleProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const WorkPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Work</h1>
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        alignItems: 'space-between',
        padding: 0
      }}
    >
      ))}
    </ul>
  </Layout>
);

export default WorkPage;
