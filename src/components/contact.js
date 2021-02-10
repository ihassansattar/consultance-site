import React from 'react'

const Contact = () => {
    const submitHandler = e => {
        e.preventDefault();
        alert("Sent");
    }
    return (
        <div className="flex flex-col items-center pt-24" id="contact">
            <h1
                className="text-3xl md:text-6xl text-gray-700 border-b-2 border-dark-blue pb-4">Contact Us</h1>

            <div className="w-full justify-around flex flex-col md:flex-row pt-16">
                <div className="mx-3 mb-5 md:m-0">
                    <h1 className="text-2xl font-semibold">Keep in touch</h1>
                    <p className="mt-8 text-gray-600 ">Street 1, Kashmir Road, Near Bakery Sector F7,</p>
                    <p className="mt-2 text-gray-600 ">Islamabad</p>
                    <p className="mt-2 text-gray-600 ">+92345123456</p>
                    <p className="mt-2 text-gray-600 ">mail@mail.com</p>
                    <p className="mt-8 text-gray-600 ">Monday - Friday</p>
                    <p className="mt-2 text-gray-600 ">9am - 5pm</p>
                </div>
                <form className="w-full md:w-1/2" onSubmit={submitHandler}>
                    <div className="flex flex-wrap md:-mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-first-name">
                                First Name
                            </label>

                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-dark-blue"
                                id="grid-first-name"
                                type="text"
                                required
                                placeholder="Jane"/>

                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-dark-blue"
                                id="grid-last-name"
                                type="text"
                                required
                                placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:-mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password">
                                E-mail
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-dark-blue"
                                id="email"
                                required
                                placeholder="johndoe@mail.com"
                                type="email"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:-mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password">
                                Message
                            </label>
                            <textarea
                                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-dark-blue h-48 resize-none"
                                id="message"
                                placeholder="Enter your message here"
                                required></textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center px-3 md:px-0">
                        <div className="md:w-1/3">
                            <button
                                className="shadow bg-dark-blue hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold w-64 py-2 px-4 rounded"
                                type="submit">
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contact;