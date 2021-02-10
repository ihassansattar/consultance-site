import React from 'react'
import Image1 from '../images/about1.jpg'
import Aboutcard from './aboutcard'
const About = () => {
    return (
        <div className="flex flex-col items-center pt-24" id="about">
            <h1 className="text-3xl md:text-6xl text-gray-700 border-b-2 border-dark-blue pb-4">About Us</h1>
            <Aboutcard
                img={Image1}
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris"
                text="eu purus malesuada, at auctor nibh tincidunt. Suspendisse venenatis vestibulum
                lectus, viverra dapibus arcu scelerisque at. Curabitur pretium quis est ut orci
                vulputate, id semper nunc consectetur. Curabitur non ipsum efficitur,
                consectetur. Sed commodo euismod lacus ac venenatis. Praesent iaculis enim a
                dictum est ut, tincidunt urna. Nunc id sem id nibh sollicitudin tristique"/>
            <div className="w-full h-0 border border-gray-100">
                <hr></hr>
            </div>
            <Aboutcard
                img={Image1}
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris"
                text="eu purus malesuada, at auctor nibh tincidunt. Suspendisse venenatis vestibulum
                lectus, viverra dapibus arcu scelerisque at. Curabitur pretium quis est ut orci
                vulputate, id semper nunc consectetur. Curabitur non ipsum efficitur,
                consectetur. Sed commodo euismod lacus ac venenatis. Praesent iaculis enim a
                dictum est ut, tincidunt urna. Nunc id sem id nibh sollicitudin tristique"/>
                <div className="w-full h-0 border border-gray-100">
                <hr></hr>
            </div>
        </div>
    )
}
export default About;