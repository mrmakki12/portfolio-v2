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
            </div>
            {/* contact form, fades left on scroll*/}
            <div className='contact' data-aos='fade-left'>
                <form aria-label='Contact Tyreeck'>
                    <input 
                        type='text' 
                        placeholder='Name'
                        aria-label='Your Name'
                    />
                    <input 
                        type='text'
                        placeholder='Subject'
                        aria-label='Subject of email'
                    />
                    <input 
                        type='email'
                        placeholder='Email'
                        aria-label='Your email address'
                    />
                    <textarea 
                        placeholder='Let Me Hear It!!!' 
                        aria-label='Your message'
                    />
                    <button type='submit' aria-label='send'>Send!</button>    
                </form>
            </div>

        </section>
    )
}