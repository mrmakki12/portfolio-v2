import React from 'react';
import { Scene } from '../../Scene/Scene';
import './landing.css';

export const Landing = () => {
    return (
        <section className='landing-container'>

            <nav>
                <ul>
                    <a href='#'>
                        <li>
                            <p>About!</p>
                        </li>
                    </a>
                    <a href='#'>
                        <li>
                            <p>Projects!</p>
                        </li>
                    </a>
                    <a href='#'>
                        <li>
                            <p>Contact!</p>
                        </li>
                    </a>
                </ul>
            </nav>

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
                    <p className='previous-portfolio'>See My Previous <a href='#'>Portfolio</a></p>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </div>

            </div>

        </section>
    )
}