import React from "react"
import About from "../components/about"
import Contact from '../components/contact'
import Footer from "../components/footer"
import Header from '../components/header'
import Navbar from '../components/navbar'
import Projects from "../components/projects"
import Services from "../components/services"
import Team from "../components/team"
import '../styles/global.css'
import '../styles/index.css'
const IndexPage = () => (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Projects/>
        <Team/>
        <Contact/>
        <Footer/>
    </div>
)

export default IndexPage
