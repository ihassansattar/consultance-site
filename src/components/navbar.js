import React from 'react'
import {useState} from 'react'
import {Link} from "gatsby"
import Logo from '../images/logo.png'
const Navbar = () => {
    const [nav,
        setNav] = useState(false);

    const navHandler = () => {
        setNav(!nav);
    }
    return (
        <div
            className="flex z-50 justify-around flex-col md:flex-row px-2 md:pt-4 sticky top-0 text-white bg-indigo-500">
            <div className="flex justify-between w-full md:w-64 items-center">
                <Link to="/">
                    <img src={Logo} width={80} alt="LOGO"/>
                </Link>
                <button className="flex flex-col md:hidden mx-2 px-2" onClick={navHandler}>
                    <span className="px-4 my-1 border bg-white border-white"></span>
                    <span className="px-4 my-1 border bg-white border-white"></span>
                    <span className="px-4 my-1 border bg-white border-white"></span>
                </button>
            </div>
            <div className="hidden md:flex flex-row items-center text-md">
                <Link to="/">
                    <p
                        className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">Home</p>
                </Link>
                <Link to="/#about">
                    <p
                        className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">About</p>

                </Link>
                <Link to="/#services">
                    <p
                        className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">Services</p>
                </Link>
                <Link to="/#projects">
                    <p
                        className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">Projects</p>
                </Link>
                <Link to="/#team">
                    <p
                        className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">Team</p>
                </Link>
                <Link to="/#contact">
                    <p
                        className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">Contact Us</p>
                </Link>
            </div>
            {nav && <div className="flex flex-col md:hidden text-md">
                <p
                    className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">Home</p>
                <p
                    className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">About</p>
                <p
                    className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">Services</p>
                <p
                    className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">Projects</p>
                <p
                    className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">Team</p>
                <p
                    className="cursor-pointer border-2 border-transparent mx-2 p-2 hover:border-white">Contact Us</p>
            </div>}
        </div>
    )
}
export default Navbar;