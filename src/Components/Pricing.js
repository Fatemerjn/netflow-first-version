import React from 'react';
import "../Styles/Pricing.css";
import { line1, line2, line3 } from './lines';

function Pricing() {
    const ButtonGroup = () => {
        return (
            <div className="button-group-container">
                <div className="button-group">
                    <button className="first-button">Basic</button>
                    <button>Premium</button>
                    <button className="last-button">Enterprise</button>
                </div>
            </div>
        );
    };
    const HorizontalLine = () => {
        return (
            <div className="horizontal-line">
                <div className="circle"></div>
                <hr className="line" />
                <div className="circle"></div>
            </div>
        );
    };
    return (
        <div>
            <div className='containerr'>
                <div className="pbanner">
                    <div className="half-width">
                        <div>
                            <h1>Pricing</h1>
                            <p className='ti'>
                                Choose Your Plan,<br />Unlock Your Potential
                            </p>
                            <p className='des'>
                                We believe in flexibility and value for everyone. Explore our pricing options and find the perfect fit for your needs.
                            </p>
                        </div>
                    </div>
                    <div className="half-width">

                        <img src='image.jpg' alt='Image' className='centered-image' />

                    </div>
                </div>
            </div>
            <div className="custom-section">
                <div className="vertical-lines-container">
                    {/* Your content for the 300px section */}

                    {line3()}
                    {line3()}
                    {line1()}
                    {line2()}
                    {line3()}
                    {line1()}
                    {line2()}
                    {line2()}
                    {line3()}

                </div>
            </div>
            <div className='body'>
                <h2>Plans</h2>
                <p>Tools for pros, prices for everyone</p>
                <ButtonGroup />
                <HorizontalLine />
                <h3>Basic (Free Trial)</h3>
                <p>Dip your toes in the exciting world of AI with our free trial.
                    Enjoy limited access to our AI modules and get a feel for the incredible potential of NetFlowAI.
                </p>
                <div className='btn-container'>
                    <button className='btn'>
                        Start Your Free Trial
                    </button>
                </div>
                <p>Access to selected AI modules, Limited network configurations,to community support </p>
                <HorizontalLine />
                <h3>Premium</h3>
                <p>
                    Unlock the full power of NetFlowAI with our Premium plan.
                    Get unlimited access to all AI modules, create complex networks, and boost your productivity to new heights.
                    Unlimited access to all AI modules Unlimited network configurations Priority customer support Access to new features and updates.
                </p>
                <div className='box'>

                </div>
                <HorizontalLine />
                <h3>Enterprise</h3>
                <p>
                    For businesses with extensive requirements, our Enterprise plan offers customized solutions. Enjoy all the benefits of our Premium plan, along with dedicated support and personalized network configurations.
                    <ul>
                        <li>Customized AI solutions</li>
                        <li>Dedicated customer support</li>
                        <li> Advanced network configurations</li>
                        <li> Access to new features and updates</li>
                    </ul>
                </p>

                <div className='btn-container'>
                    <button className='btn'>
                        Contact Us for Enterprise Solutions
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;