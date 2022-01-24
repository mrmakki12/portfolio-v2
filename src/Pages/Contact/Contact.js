import React from 'react';
import './contact.css';

export const Contact = () => {
    return (
        <section className='container' id='contact'>
            <div className='text' data-aos='fade-right'>
                <h1>Contact!</h1>
                <p>
                    If you made down here, go ahead and send me an email!
                    It can be about anything really.
                </p>
            </div>
            <div className='contact' data-aos='fade-left'>
                <form>
                    <input 
                        type='text' 
                        placeholder='Name'
                    />
                    <input 
                        type='text'
                        placeholder='Subject'
                    />
                    <input 
                        type='email'
                        placeholder='Email'
                    />
                    <textarea 
                        placeholder='Let Me Hear It!!!' 
                    />
                    <button type='submit'>Send!</button>
                        
                </form>
            </div>
        </section>
    )
}