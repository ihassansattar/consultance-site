import React from 'react'

const Aboutcard = (props) => {
    return (
        <div className="flex flex-col md:flex-row justify-center px-2 md:px-0 w-full md:w-2/3 py-24">
            <img
                src={props.img}
                alt="Nigga"
                width="300"
                className="border border-transparent rounded-xl"/>
            <div className="flex flex-col md:ml-32 mt-4 md:mt-0 ">
                <p className="mb-8 font-semibold">
                    {props.heading}
                </p>
                <p>
                    {props.text}
                </p>
                <button
                    className="flex self-end uppercase text-sm focus:outline-none hover:bg-dark-blue hover:text-white p-2 ">Learn More</button>
            </div>
        </div>
    )
}
export default Aboutcard;