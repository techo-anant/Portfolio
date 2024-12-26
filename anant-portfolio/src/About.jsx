import React from 'react';
import './About.css'

const About = () => {

    return(
        <div className="about">
            <div className="my-photo">
                <div className="anantPhoto"></div>
            </div>
            <div className="info">
                <span id='name'><b><span id='letter'>A</span>NANT</b> <span id='letter'>K</span>UMAR <b><span id='letter'>S</span>INGH</b></span>
                <p id="dscp">A passionate <b>Computer Science and Business Administration</b> student.<br />Exploring for opportunities in the tech world.<br />My portfolio showcases a variety of projects that blend technology and business, including full-stack web development applications, financial models, and software solutions.</p>
            </div>
        </div>
    );

};

export default About;