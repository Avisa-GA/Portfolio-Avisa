import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Img from 'gatsby-image';


export default function About({data}) {
  return (
    <Layout>
      <div>
        <h1>About</h1>
        <br />
        <Img style={{maxWidth: '300px'}}
          fluid={data.file.childImageSharp.fluid}
        />
        <p>
          I'm a Full Stack Engineer / Developer with bachelor degree of software
          engineering and with the Background of iOS development .
        </p>
        <p>
          I am a quick learner, who can absorb new ideas quickly and can
          communicate clearly and effectively.
        </p>
        <p>
          I have the ability to turn complex idea into clear and compelling
          stories . Motivated by the desire to help people tell dynamic and
          captivating narratives that harness the interactive qualities of the
          web.
        </p>
        <Link style={{color: "#ffd600"}} to="https://www.linkedin.com/in/avisa-a-poshtkouhi/">LinkedIn</Link>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;