import React from 'react'
import Servicecard from './servicecard'
import Image1 from '../images/1.jpg'
const Services = () => {
    return (
        <div className="flex flex-col items-center pt-24" id="services">
            <h1
                className="text-3xl md:text-6xl text-gray-700 border-b-2 border-dark-blue pb-4">Expertise</h1>
            <div
                className="pt-24 flex flex-col md:flex-row justify-center items-center px-2 xl:px-0 w-full xl:w-2/3  ">
                <Servicecard
                    heading="Web Development"
                    text="Our highly qualified team will provide with not only what you need but better."
                    grey={true}
                    img="https://img.icons8.com/ios-glyphs/30/000000/web.png"/>
                <Servicecard
                    heading="Emerging Technologies & Research"
                    text="e work on Data Analisis and Big Data, Climate Resilience Infrastructure Tool Design , Algorithms Design, & Machine Learning, IoT Applied Research"
                    grey={false}
                    img="https://img.icons8.com/ios/50/000000/wearable-technology.png"/>
                <Servicecard
                    heading="Mobile App Development"
                    text="Our team of the best developers will work and make your and the user’s time worthwhile."
                    grey={true}
                    img="https://img.icons8.com/dotty/80/000000/medical-mobile-app.png"/>
            </div>
            <div
                className="flex flex-col md:flex-row justify-center items-center px-2 xl:px-0 w-full xl:w-2/3">
                <Servicecard
                    heading="Performance Driven Apps"
                    text="Our aim is to provide quality web and mobile apps making no compromise on performance."
                    grey={false}
                    img="https://img.icons8.com/dotty/80/000000/medical-mobile-app.png"/>
                <Servicecard
                    heading="Search Optimization"
                    text="We will help you standout from your competitors by placing you on the top."
                    grey={true}
                    img="https://img.icons8.com/material-rounded/24/000000/google-web-search.png"/>
                <Servicecard
                    heading="Product Design"
                    text="We translate your business goals and objectives into stunning software."
                    grey={false}
                    img="https://img.icons8.com/material-outlined/24/000000/design--v2.png"/>
            </div>
            <div className="w-full h-0 border border-gray-100 mt-24">
                <hr></hr>
            </div>
        </div>
    )
}
export default Services;