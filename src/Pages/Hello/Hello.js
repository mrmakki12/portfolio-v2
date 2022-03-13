import React, { useState, useEffect} from 'react'; 
// import styles 
import './hello.css';

export const Hello = () => {

    // state sets image source 
    const [source, setSource] = useState('/static/photos/me/me.jpg');

    // function to change image source
    const changeSource = () => {
        setSource(source === '/static/photos/me/me.jpg' ? '/static/photos/me/me1.jpg' : '/static/photos/me/me.jpg');
    }

    // using this to switch source of image periodically
    useEffect(() => {
        setTimeout(changeSource, 3000);
    });

    return (
        <section className='container' id='about'>
            {/* text container with info about me */}
            <div className='text' data-aos='fade-right'>
                <h1>Hello!</h1>
                <p>
                    I'm Tyreeck, a Web Developer from North Carolina.
                    I love that I get to not only express myself and my values, but that I get to help people
                    express themselves through my work! I also love the mental exercise involved with learning new
                    skills and using my imagination to bring projects from the mind, to the drawing table and 
                    into the world.
                </p>
                <br />
                <br />
                <p>
                    I like spending my free time in the gym, drawing and learning through books, podcast and online courses. 
                    I'm very interested in learning about the mind, philosophy, economics, education and self-improvement.
                </p>
                <br />
                <br />
                <p>
                    I consider myself I life-long learner. So, I prefer to be in an environment where I get to learn
                    and try new things on a consistent basis.
                </p>
            </div>
            {/* picture of me */}
            <div className='me' data-aos='fade-left'>
                <img src={source} className='me-image' alt='Mr.Tyreeck himself'/>
            </div>

        </section>
    )
}