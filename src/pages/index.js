import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Software Engineer</h2>
          <h3>full stack</h3>
          <p>based in San Jose</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Link
              className={btn}
              to="https://www.linkedin.com/in/avisaposhtkouhi/"
            >
              LinkedIn
            </Link>
            <Link
              className={btn}
              to="https://generalassemb.ly/instructors/avisa-poshtkouhi/28400"
            >
              General Assembly
            </Link>
          </div>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
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
`
