import React from 'react'
import Projectcard from './projectcard'

const Projects = () => {
    return (
        <div className="flex flex-col items-center pt-24" id="projects">
            <h1
                className="text-3xl md:text-6xl text-gray-700 border-b-2 border-dark-blue pb-4">Projects</h1>
            <div className="flex justify-around items-center w-full flex-wrap pt-4 px-2">
                <Projectcard
                    img="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    title="Dummy Project A"
                    text="Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas
                odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
                consequuntur!"
                    name="Jane Doe"/>
                <Projectcard
                    img="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    title="Dummy Project B"
                    text="Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas
                odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
                consequuntur!"
                    name="Johan Doe"/>
                <Projectcard
                    img="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    title="Dummy Project C"
                    text="Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas
                odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
                consequuntur!"
                    name="John Doe"/>
            </div>
            <div className="w-full h-0 border border-gray-100">
                <hr></hr>
            </div>
        </div>
    )
}
export default Projects;