import React from 'react'
import Servicecard from './servicecard'
import Image1 from '../images/1.jpg'
const Services = () => {
    return (
        <div className="flex flex-col items-center pt-24" id="services">
            <h1
                className="text-3xl md:text-6xl text-gray-700 border-b-2 border-dark-blue pb-4">Services</h1>
            <div
                className="pt-24 flex flex-col md:flex-row justify-center items-center px-2 xl:px-0 w-full xl:w-2/3  ">
                <Servicecard
                    heading="24/7 Support"
                    text="Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s"
                    grey={true}
                    img={Image1}/>
                <Servicecard
                    heading="24/7 Support"
                    text="Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s"
                    grey={false}
                    img={Image1}/>
                <Servicecard
                    heading="24/7 Support"
                    text="Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s"
                    grey={true}
                    img={Image1}/>
            </div>
            <div
                className="flex flex-col md:flex-row justify-center items-center px-2 xl:px-0 w-full xl:w-2/3">
                <Servicecard
                    heading="24/7 Support"
                    text="Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s"
                    grey={false}
                    img={Image1}/>
                <Servicecard
                    heading="24/7 Support"
                    text="Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s"
                    grey={true}
                    img={Image1}/>
                <Servicecard
                    heading="24/7 Support"
                    text="Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s"
                    grey={false}
                    img={Image1}/>
            </div>
            <div className="w-full h-0 border border-gray-100 mt-24">
                <hr></hr>
            </div>
        </div>
    )
}
export default Services;