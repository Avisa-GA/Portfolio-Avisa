import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    
  
    const data = useStaticQuery(graphql`
    query SiteInfo {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    console.log(data)

    const {title} = data.site.siteMetadata;


    return (
        <nav>
          <div className="title" style={{display:"flex", marginBottom: "10%"}}>
            {/* <img src="/profile.jpg" alt="Avisa" style={{maxWidth: "48px",maxHeight: "48px", borderRadius: "50%", marginTop: "-3%"}}/> */}
            <h1 style={{marginLeft: "1%"}}>{title}</h1>
          </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}

