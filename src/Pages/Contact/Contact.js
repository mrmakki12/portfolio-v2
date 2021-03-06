import React from 'react';
import './contact.css';

export const Contact = () => {
    return (
        <section className='container' id='contact'>
            {/* container of text about contacting me, fades right on scroll */}
            <div className='text' data-aos='fade-right'>
                <h1>Contact!</h1>
                <p>
                    Contact me to see how I can help you meet your goals! 
                </p>
                {/* links to linkedIn and Github */}
                <a href='https://www.linkedin.com/in/tyreeck-makki/' aria-label="Tyreeck's LinkedIn" target='_blank' rel='noreferrer'><span aria-hidden="true" className="devicons devicon-linkedin-plain colored" title="My LinkedIn"></span></a>
                <a href='https://github.com/mrmakki12' aria-label="Tyreeck's Github" target='_blank' rel='noreferrer'><span aria-hidden="true" className="devicons devicon-github-original" title="My Github"></span></a>
            </div>
            {/* contact form, fades left on scroll*/}
            <div className='contact' data-aos='fade-left'>
                <form aria-label='Contact Tyreeck' action='https://formsubmit.co/3112bd9a45183d9f0beb00ecedc5f219' method='POST'>
                    <input 
                        type='text' 
                        placeholder='Name'
                        aria-label='Your Name'
                        name='Name'
                        required
                    />
                    <input 
                        type='text'
                        placeholder='Subject'
                        aria-label='Subject of email'
                        name='Subject'
                        required
                    />
                    <input 
                        type='email'
                        placeholder='Email'
                        aria-label='Your email address'
                        name='Email'
                        required
                    />
                    <textarea 
                        placeholder='Let Me Hear It!!!' 
                        aria-label='Your message'
                        name='Text'
                        required
                    />
                    <button type='submit' aria-label='send'>Send!</button>    
                </form>
            </div>

        </section>
    )
}