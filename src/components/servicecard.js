import React from 'react'
const Servicecard = (props) => {
    return (
        <div
            className={`flex flex-col items-center justify-center text-center p-4 ${props.grey
            ? ' bg-gray-100'
            : ' bg-white'}`}>
            <img src={props.img} alt="Card" className="w-24 h-24 rounded-full mb-4"/>
            <h1 className="font-semibold text-lg mb-4">{props.heading}</h1>
            <p>
                {props.text}
            </p>
            <button
                className="my-4 self-end uppercase text-sm focus:outline-none hover:bg-dark-blue hover:text-white p-2 ">Learn More</button>
        </div>
    )
}

export default Servicecard;