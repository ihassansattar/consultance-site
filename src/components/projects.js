import React from 'react'
import Projectcard from './projectcard'

const Projects = () => {
    return (
        <div className="flex flex-col items-center pt-24" id="projects">
            <h1
                className="text-3xl md:text-6xl text-gray-700 border-b-2 border-dark-blue pb-4">Projects</h1>
            <div className="flex justify-around items-center w-full flex-wrap pt-4 px-2">
                <Projectcard
                    title="E-Office Software Development For Fedral Government"
                    text="The project involves development of automated system/ERP for fedral government for office correspondence, procurement, finance, and HR related activites"
                    />
                <Projectcard
                    title="Implementation of SAP ERP at Papersack Manufacturing Plant"
                    text="This is a complete implementation of SAP ERP at a Papersac Manufacturing Plant which includes Material Management, Production Planning, Plant Maintenance, Quaility Management, FICO, Sales and distribution modules."
                    />
                <Projectcard
                    title="Web Based Accreditation System"
                    text="A web portal was developed for HEC accreditation system for different institutes"
                    />
            </div>
            <div className="w-full h-0 border border-gray-100">
                <hr></hr>
            </div>
        </div>
    )
}
export default Projects;