import React from 'react';
import './contact.css';

export const Contact = () => {
    return (
        <section className='container' id='contact'>
            {/* container of text about contacting me, fades right on scroll */}
            <div className='text' data-aos='fade-right'>
                <h1>Contact!</h1>
                <p>
                    If you made down here, go ahead and send me an email!
                    It can be about anything really.
                </p>
                {/* links to linkedIn and Github */}
                <a href='https://www.linkedin.com/in/tyreeck-makki/' target='_blank'><span aria-hidden="true" className="devicons devicon-linkedin-plain colored" title="My LinkedIn"></span></a>
                <a href='https://github.com/mrmakki12' target='_blank'><span aria-hidden="true" className="devicons devicon-github-original" title="My Github"></span></a>
            </div>
            {/* contact form, fades left on scroll*/}
            <div className='contact' data-aos='fade-left' action='https://formsubmit.co/mrmakki12@gmail.com' method='POST'>
                <form aria-label='Contact Tyreeck'>
                    <input 
                        type='text' 
                        placeholder='Name'
                        aria-label='Your Name'
                        name='Name'
                    />
                    <input 
                        type='text'
                        placeholder='Subject'
                        aria-label='Subject of email'
                        name='Subject'
                    />
                    <input 
                        type='email'
                        placeholder='Email'
                        aria-label='Your email address'
                        name='Email'
                    />
                    <textarea 
                        placeholder='Let Me Hear It!!!' 
                        aria-label='Your message'
                        name='Text'
                    />
                    <button type='submit' aria-label='send'>Send!</button>    
                </form>
            </div>

        </section>
    )
}