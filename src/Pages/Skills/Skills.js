import React from 'react';
import './skills.css';

export const Skills = () => {
    return (

        <section className='container'>
            <div className='text'>
                <h1>Skills!</h1>
                <p>
                These are the technologies I am most familiar with and have
                    used in my projects. The ellipsis represent future skills to be added.
                    As of now I'm only 'comfortable' with front-end technologies, but I have
                    a strong interest in learning the backend with Node, Express and SQL. I'll
                    never stop learning.
                </p>
            </div>
            <div className='skills'>
                <div>
                    <span aria-hidden="true" className="devicons devicon-javascript-plain colored" title="JavaScript &amp; ES6"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-react-original colored" title="JavaScript &amp; ES6"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-redux-original colored" title="JavaScript &amp; ES6"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-html5-plain colored" title="JavaScript &amp; ES6"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-css3-plain colored" title="JavaScript &amp; ES6"></span>
                </div>
                <div>
                    <span aria-hidden="true" className="devicons devicon-github-original colored" title="JavaScript &amp; ES6"></span>
                </div>
                <div>
                    <span aria-hidden="true" className='devicons tbd'>...</span>
                </div>
                <div>
                <span aria-hidden="true" className='devicons tbd'>...</span>
                </div>
            </div>
        </section>
    )
}