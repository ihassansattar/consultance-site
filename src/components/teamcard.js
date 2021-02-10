import React from 'react'

const Teamcard = (props) => {
    return (
        <div
            className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
            <img
                className="max-h-20 w-full opacity-80 absolute top-0"
                style={{
                zIndex: -1
            }}
                src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
                alt=""/>
            <div className="profile w-full flex m-3 ml-0 md:ml-4 text-white">
                <img className="w-28 h-28 p-1 bg-white rounded-full" src={props.img} alt="Team member"/>
                <div className="title mt-10 ml-3 font-bold flex flex-col">
                    <div className="text-2xl">{props.name}</div>
                    <div className="text-lg text-black">{props.profession}</div>
                </div>
            </div>
            <div
                className="flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                <div
                    className="border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Contact</div>
            </div>
        </div>
    )
}
export default Teamcard;