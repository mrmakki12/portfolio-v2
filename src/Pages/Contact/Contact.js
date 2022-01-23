import React from 'react';
import './contact.css';

export const Contact = () => {
    return (
        <section className='container'>
            <div className='text'>
                <h1>Contact!</h1>
                <p>
                    If you made down here, go ahead and send me an email!
                    It can be about anything really.
                </p>
            </div>
            <div className='contact'>
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