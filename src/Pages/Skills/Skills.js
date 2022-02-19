import React from 'react';
import './skills.css';

export const Skills = () => {
    return (

        <section className='container'>
            {/* text container with info on my skills */}
            <div className='text' data-aos='fade-right'>
                <h1>Skills!</h1>
                <p>
                These are the technologies I am most familiar with and have
                    used in my projects. The ellipsis represent future skills to be added.
                    As of now I'm only 'comfortable' with front-end technologies, but I have
                    a strong interest in learning the backend with Node, Express and SQL. I'll
                    never stop learning.
                </p>
            </div>
            {/* skills container with devicons representing skills */}
            <div className='skills' data-aos='fade-left'>
                <div>
                    <span aria-hidden="true" className="devicons devicon-javascript-plain colored" title="JavaScript"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-react-original colored" title="React"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-redux-original colored" title="Redux"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-html5-plain colored" title="HTML5"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-css3-plain colored" title="CSS3"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-github-original" title="Github"></span>
                </div>
                <div>
                    <span aria-hidden="true" className='devicons tbd' title='Future skill here :)'>...</span>
                </div>
                <div>
                <span aria-hidden="true" className='devicons tbd' title='Another Future skill here :)'>...</span>
                </div>
            </div>
            
        </section>
    )
}