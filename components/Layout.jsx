//Matthew Kool 301184313
//Imports
import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../Icon.png';

//Navigation layout
export default function Layout() {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -175%)' }}>

            <h1>My Portfolio</h1>
            <img src={Picture} width="100" height="100" />
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> |
                <Link to="/education">Education</Link> | <Link to="/project">Project</Link> | 
                <Link to="/contact">Contact</Link> |
                <Link to="/services">Service</Link>
            </nav>
            <hr />
        </div>
    );
}