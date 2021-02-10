import React from 'react'

const Projectcard = (props) => {
    return (
        <div>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className="flex justify-center md:justify-end -mt-16">
                    <img
                        className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                        src={props.img}
                        alt="Card"/>
                </div>
                <div>
                    <h2 className="text-gray-800 text-xl mt-2 md:text-3xl font-semibold text-center">{props.title}</h2>
                    <p className="mt-2 text-gray-600">{props.text}</p>
                </div>
                <div className="flex justify-end mt-4">
                    <p className="text-xl font-medium text-indigo-500">{props.name}</p>
                </div>
            </div>
        </div>
    )
}
export default Projectcard;