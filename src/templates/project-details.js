import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import {
  featured,
  details,
  htmlTemp
} from "../styles/project-details-module.css";

export default function ProjectDetails({ data }) {

  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div>
        <div className={htmlTemp} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

