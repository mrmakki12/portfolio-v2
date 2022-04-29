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
                <div>
                    <h2><span>About Me!</span></h2>
                    <br />
                    <p>
                        I'm Tyreeck, a Developer from North Carolina.
                        I love that I get to express myself and my values, and that I get to help people
                        express themselves through my work! I love the mental exercise involved with learning and using my imagination to bring projects from the mind and 
                        into the world.
                    </p>
                </div>
                <br />
                <br />
                <div style={{display: 'flex'}}>
                    <div style={{minWidth: '40%'}}>
                        <h2><span>Soft Skills</span></h2>
                        <br />
                        <ul>
                            <li>
                                <p>- Patience</p>
                            </li>
                            <li>
                                <p>- Persistence</p>
                            </li>
                            <li>
                                <p>- Discipline</p>
                            </li>
                            <li>
                                <p>- Expectancy</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            I'm looking to help out where ever I can. I believe having these skills makes me a great teammate!
                            Who wants to work with someone missing these skills?
                        </p>
                    </div>
                </div>
                <br />
                <br />
            </div>
            {/* picture of me */}
            <div className='me' data-aos='fade-left'>
                <img src={source} className='me-image' alt='Mr.Tyreeck himself'/>
            </div>

        </section>
    )
}