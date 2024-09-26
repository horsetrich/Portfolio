//Matthew Kool 301184313
//Imports
import React from 'react';
import { Link } from 'react-router-dom';

//Default home page
const Home = () => {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -80%)' , textAlign: 'center'}}>
            <h1>Welcome to My Portfolio</h1>
            <p>It's my goal to pass this course!</p>
            <br />
            <p>It is my hope to learn all I can and use the skills and knowledge I can to further my career</p>
            <button><Link to="/about">All About Me!</Link></button>
        </div>
    );
};
export default Home;