import React from 'react';
import './projects.css';
import { projects } from './projects-data';

export const Projects = () => {

    return (
        <section className='container' id='projects'>
            <div className='text' data-aos='fade-right'>
                <h1>Projects!</h1>
                <p>
                    Theses are some the projects I've made using the tech
                    listed above. I'm always working on a project.
                </p>
            </div>
            <div className='projects' >
                {
                    projects.map((project) => {
                        return (
    
                            <div className='project'>
                                <a href={project.link}>
                                    <div className='screenshot-link'>
                                        <img src={project.screenshot} className='screenshot'/>
                                    </div>
                                </a>
                                <div className='description'>
                                    <p>{project.description}</p>
                                </div>
                                <ul>
                                    {
                                        project.tech.map(type => {
                                            return <span aria-hidden="true" className={type + " colored"} title="JavaScript &amp; ES6"></span>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}