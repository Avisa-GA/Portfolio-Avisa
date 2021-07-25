import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { header, btn } from "../styles/home.module.css";
import Img from 'gatsby-image';

export default function Home({data}) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Software Engineer</h2>
          <h3>full stack</h3>
          <p>software developer based in SanJose</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img
          fluid={data.file.childImageSharp.fluid}
        />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner-one.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
