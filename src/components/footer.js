import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className="pt-24 flex flex-col items-center w-full">
            <div className="bg-gray-100 w-full pt-8 flex justify-center">
                <div className="pt-2 flex justify-between w-56">
                    <button
                        className=" w-12 h-12 flex justify-center items-center rounded-full focus:outline-none border bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faFacebook} />
                    </button>
                    <button
                        className="w-12 h-12 flex justify-center items-center rounded-full focus:outline-none border bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                    <button
                        className=" w-12 h-12 flex justify-center items-center rounded-full focus:outline-none border bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 pt-8 w-full">
                <div
                    className="flex pb-5 px-3 m-auto pt-5 border-t justify-center items-center text-gray-800 text-sm flex-col md:flex-row max-w-6xl">
                    <div className="mt-2">© Copyright 2020. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}
export default Footer;