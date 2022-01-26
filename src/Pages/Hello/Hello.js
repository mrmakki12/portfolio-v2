import React from 'react';

export const Hello = () => {
    return (
        <section className='container' id='about'>
            {/* text container with info about me */}
            <div className='text' data-aos='fade-right'>
                <h1>Hello!</h1>
                <p>
                    Hey, I'm Tyreeck. I'm a Web-Developer from North Carolina.
                    I love Web-Development and coding in general because it enables 
                    me to express myself and my interest and potentially get in touch 
                    with thousands, hundreds of thousands or even millions of people.
                    <br />
                    <br />
                    Besides coding I love to hit the gym, play basketball and learn about things that
                    interest me like philosophy, economics and self-improvement.
                    <br />
                    <br />
                    Constant and Never Ending Improvement(CANI) is one of the values I hold most dearly, and 
                    has allowed me to improve in all aspects of life (including coding).
                    I would love to work with a group that makes it a priority to constantly improve themselves 
                    and their work by learning new strategies and skills.
                </p>
            </div>
            {/* picture of me */}
            <div className='me' data-aos='fade-left'>
            </div>

        </section>
    )
}