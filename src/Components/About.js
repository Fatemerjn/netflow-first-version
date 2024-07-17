import React from 'react';
import "../Styles/About.css";

function About() {
    return (
        <div>
            <div className='abbanner'>
                <p className='title'>Our Journey, Your Future</p>
                <p className='des'>
                    Discover the story of NetFlowAI, the team behind it, and our vision for a smarter future.
                </p>
            </div>
            <div className='body'>
                <div className='Row'>
                    <div className='Item'>
                        <h2>Our Story</h2>
                        <p>
                            NetFlowAI started with a simple yet revolutionary idea – make the power of AI accessible to everyone. Our mission is to democratize AI, turning it from a complex and daunting technology into an easy-to-use and transformative tool for businesses and individuals alike.
                        </p>
                    </div>
                    <div className='Item'>
                        <div className='box'></div>
                    </div>
                </div>
                <div className='Row'>
                    <div className='Item'>
                        <div className='box'></div>
                    </div>
                    <div className='Item'>
                        <h2>Our Team</h2>
                        <p>
                            We are a team of innovators, dreamers, and creators who share a passion for technology and a belief in the power of AI. Our diverse skills and backgrounds, united by our vision, make NetFlowAI the innovative and unique platform it is today.                        </p>
                    </div>
                </div>
                <div className='Row'>
                    <div className='Item'>
                        <h2>Our Vision</h2>
                        <p>
                            Our vision is a world where everyone can tap into the power of AI, a world where complex tasks are simplified, and productivity is amplified. By providing the tools and the platform to create complex AI networks, we're taking significant steps towards that future.                        </p>
                    </div>
                    <div className='Item'>
                        <div className='box'></div>
                    </div>
                </div>
            </div>
            <div className='btn-container'>
                <button className='btn'>
                    Join Us Today
                </button>
            </div>
        </div>
    );
}

export default About;