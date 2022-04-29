import React from 'react';
import './skills.css';

export const Skills = () => {
    return (

        <section className='container'>
            {/* text container with info on my skills */}
            <div className='text' data-aos='fade-right'>
                <h1>Skills!</h1>
                <p>
                    These are the tech that I have used in the projects below. I'm willing to learn whatever 
                    it takes to complete projects. It's impossible, but I want to learn everything!
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
                    <span aria-hidden="true" className="devicons devicon-postgresql-plain colored" title="PostgreSQL with Postbird"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-figma-plain colored" title="Figma"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-express-original colored" title="Express.js"></span>
                </div>
                <div>
                    <span aria-hidden="true" className='devicons devicon-nodejs-plain colored' title='Node.js'></span>
                </div>
                <div>
                    <span aria-hidden="true" className='devicons devicon-vscode-plain colored' title='VSCode'></span>
                </div>
                <div>
                    <span aria-hidden="true" className='devicons devicon-jest-plain colored' title='Jest with React-testing-library'></span>
                </div>
                <div>
                    <span aria-hidden="true" className='devicons devicon-bootstrap-plain colored' title='Bootstrap'></span>
                </div>
                <div>
                    <span aria-hidden="true" className='devicons devicon-markdown-plain' title='Markdown'></span>
                </div>
                <div>
                    <span aria-hidden="true" className='devicons devicon-mysql-plain' title='MySQL'></span>
                </div>
                <div>
                    <span aria-hidden="true" className='devicons devicon-heroku-original colored' title='Heroku'></span>
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