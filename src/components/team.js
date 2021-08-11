import React from 'react'
import Teamcard from './teamcard'
import Avatar from '../images/avatar.png'

const Team = () => {
    return (
        <div className="flex flex-col items-center pt-24" id="team">
            <h1
                className="text-3xl md:text-6xl text-gray-700 border-b-2 border-dark-blue pb-4">Our Team</h1>
            <div className="flex justify-around items-center w-full flex-wrap pt-4 px-2">

                <Teamcard
                    img="https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-1506810-1278719.png"
                    name="Dr. Ali jahangiri"
                    email="shahid@iocpk.com"
                    profession="Team Lead"/>
                <Teamcard
                    img="https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-1506810-1278719.png"
                    name="Mr. Sadit Zia Khan"
                    email="sadit@iocpk.com"
                    profession="Lead Consultant/Advisor"/>
                <Teamcard
                    img="https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-1506810-1278719.png"
                    name="Shahid Mehmood"
                    email="shahid@iocpk.com"
                    profession="Lead Development and Integration"/>

            </div>
            <div className="w-full h-0 border border-gray-100 mt-24">
                <hr></hr>
            </div>
        </div>
    )
}
export default Team;