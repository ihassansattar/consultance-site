import React from 'react'
import Image1 from '../images/about1.jpg'
import Aboutcard from './aboutcard'
const About = () => {
    return (
        <div className="flex flex-col items-center pt-24" id="about">
            <h1 className="text-3xl md:text-6xl text-gray-700 border-b-2 border-dark-blue pb-4">About Us</h1>
            <Aboutcard
                img={Image1}
                heading="Who are we?"
                text="We are a team of highly professional software engineers who thrive to help the world with solutions for real world problems.We believe in technology to minimize the complexity of our jobs. we make work better for people with modern digital workflows, helping build result-oriented brand strategies, and develop your product. From full-scale developement to deployment and post-support. That’s right, we’ve got you covered!"/>
            <div className="w-full h-0 border border-gray-100">
                <hr></hr>
            </div>
           
              
        </div>
    )
}
export default About;