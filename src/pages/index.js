import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { header, btn } from "../styles/home.module.css";
import Img from 'gatsby-image';

export default function Home({data}) {
  return (
    <Layout>
      <section className={header}>
        <div style={{ display:'flex', justifyContent:'space-between' }} >
          <h2>Software Engineer</h2>
          <h3>full stack</h3>
          <p>based in San Jose</p>
          <Link className={btn} to="https://www.linkedin.com/in/avisa-a-poshtkouhi/">
            LinkedIn
          </Link>
          <Link className={btn} to="https://generalassemb.ly/instructors/avisa-poshtkouhi/28400">
            General Assembly
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
  query Profile {
    file(relativePath: { eq: "banner-one.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
