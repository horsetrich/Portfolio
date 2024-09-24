import React from 'react';
import myFile from './Resume.pdf';
import myPicture from './MatthewPicture.jpg';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h1>About Me</h1>
            <img src={myPicture} alt="Picture of Me" width="50" height="100"/>
            <p>Hello, I am Matthew Kool. I am a second year student
                At Centennial College in the game programming course. It's my goal to pass with adequate marks.
            </p>
            <br />
            <p>I am currently 23 years old, and am studying with hopes to continue my studies in an engineering program.
                I grew up in a small town north west of Toronto, and grew up playing various sports. Programming is fun,
                as it is like a puzzle to me. Hi Mila, I love you :)
            </p>
            <Link to={myFile} download="My-Resume.pdf" target="_blank" rel="noreferrer">Download my resume</Link>
        </div>
    );
};

export default About;