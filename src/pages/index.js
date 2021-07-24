import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {header, btn} from '../styles/home.module.css'

export default function Home() {

  return (
    <Layout>
    <section className={header}>
    <div>
      <h2>Design</h2>
      <h3>Develop & Deploy</h3>
      <p>UX designer & web developer based in SanJose</p>
      <Link className={btn} to="/projects">My Portfolio Projects</Link>
    </div>
    <img src="/banner-one.jpeg" alt="banner-one" style={{maxWidth: '100%'}}/>
    </section>
    </Layout>
  )
}

