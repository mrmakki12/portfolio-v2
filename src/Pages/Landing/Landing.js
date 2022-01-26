import React from 'react';
import { Scene } from '../../Scene/Scene';
import './landing.css';

export const Landing = (props) => {

    const theme = props.theme;
    const setTheme = props.setTheme;

    return (
        <section className='landing-container'>
            {/* navigation */}
            <nav role='navigation'>
                <ul>
                    <a href='#about'>
                        <li>
                            <p>About!</p>
                        </li>
                    </a>
                    <a href='#projects'>
                        <li>
                            <p>Projects!</p>
                        </li>
                    </a>
                    <a href='#contact'>
                        <li>
                            <p>Contact!</p>
                        </li>
                    </a>
                </ul>
            </nav>
            {/* container with my name and three.js scene  */}
            <div className='name'>

                <div className='meet-tyreeck'>
                    <div className='meet-tyreeck-text'>
                        <p>Meet</p>
                        <br />
                        <h1>Tyreeck</h1>
                    </div>
                    <Scene />
                </div>
                
                <div className='makki-dev'>
                    <div className='makki-dev-text'>
                        <h1>Makki</h1>
                        <p>Web Developer</p>
                    </div>
                    <p className='previous-portfolio'>See My Previous <a target='_blank' href='https://meet-tyreeck.netlify.app'>Portfolio</a></p>
                    <label className="switch">
                        <input 
                            type="checkbox" 
                            aria-label='Dark and light mode toggle'
                            aria-checked='false'
                            onClick={() => {
                                theme === 'light' ? setTheme('dark') : setTheme('light');
                            }}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>

            </div>

        </section>
    )
}