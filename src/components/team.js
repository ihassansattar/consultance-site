import React from 'react'
import Teamcard from './teamcard'

const Team = () => {
    return (
        <div className="flex flex-col items-center pt-24" id="team">
            <h1
                className="text-3xl md:text-6xl text-gray-700 border-b-2 border-dark-blue pb-4">Our Team</h1>
            <div className="flex justify-around items-center w-full flex-wrap pt-4 px-2">

                <Teamcard
                    img="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
                    name="Sarah"
                    profession="CEO"/>
                <Teamcard
                    img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
                    name="Alex"
                    profession="CTO"/>
                <Teamcard
                    img="https://i.imgur.com/JFHjdNr.jpg"
                    name="Logan"
                    profession="Designer"/>

            </div>
            <div className="w-full h-0 border border-gray-100 mt-24">
                <hr></hr>
            </div>
        </div>
    )
}
export default Team;