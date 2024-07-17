import React from 'react';
import "../Styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {

  return (
    <footer>

      <nav className='footer'>

        <div className='column'>
          <p className='logo'>LOGO</p>
        </div>

        <div className="column">
          <h4>Get Started</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Sign up</a></li>
            <li><a href="/">Downloads</a></li>
          </ul>
        </div>

        <div className="column">
          <h4>About us</h4>
          <ul>
            <li><a href="/about">Company Information</a></li>
            <li><a href="/team">Contact us</a></li>
            <li><a href="/blog">Reviews</a></li>
          </ul>
        </div>

        <div className="column">
          <h4>Support</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Help desk</a></li>
            <li><a href="/contact">Forums</a></li>
          </ul>
        </div>
        <div className="column">
          <div className="social-icons">
            <a href="https://www.google.com">
              <FontAwesomeIcon icon={faGooglePlus} />

            </a>

            <a href="https://www.facebook.com/yourpage">


              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a href="https://www.twitter.com/yourprofile">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div>
            <button className='btn'>contact us</button>

          </div>
        </div>
      </nav>

      <p className='footnav'>
        &copy; 2016 Copyright Text
      </p>

    </footer>
  );

}

export default Footer;