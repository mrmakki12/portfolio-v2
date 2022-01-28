import React from 'react';
import './projects.css';
import { projects } from './projects-data';

export const Projects = () => {

    return (
        <section className='container' id='projects'>
            {/* container with text info on projects, fades right on scroll */}
            <div className='text' data-aos='fade-right'>
                <h1>Projects!</h1>
                <p>
                    Theses are some the projects I've made using the tech
                    listed above. I'm always working on a project.
                </p>
            </div>
            {/* container with projects rendered from projects-data.js, fades right on scroll */}
            <div className='projects-wrapper' data-aos='fade-left'>
                {/* scrolls overflow */}
                <button 
                    className='scroll left'
                    onClick={() => document.querySelector('.projects').scrollBy({top: 0, left: -550, behavior: 'smooth'})}>
                </button>
                <div className='projects'>
                {/* rendering projects from data */}
                    {
                        projects.map((project) => {
                            return (
                                // project 
                                <div className='project' key={Math.random() * 10}>
                                    {/* project image / image-container */}
                                    <a target='_blank' href={project.link} aria-label={project.name + ' website link'}>
                                        <div className='screenshot-link' role='link'>
                                            <img src={project.screenshot} className='screenshot' alt={project.name}/>
                                        </div>
                                    </a>
                                    {/* project description */}
                                    <div className='description'>
                                        <p>{project.description}</p>
                                    </div>
                                    {/* list of tech used */}
                                    <ul>
                                        {
                                            project.tech.map(type => {
                                                return <span aria-hidden="true" key={Math.random() * 10} className={"devicons-1 " + type + " colored"}></span>
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }

                </div>
                {/* scrolls overflow */}
                <button 
                    className='scroll right'
                    onClick={() => document.querySelector('.projects').scrollBy({top: 0, left: 550, behavior: 'smooth'})}> 
                </button>
            </div>

        </section>
    )
}