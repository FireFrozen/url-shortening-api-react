import React from 'react';
import "./FooterApp.css";
import Logo from '../images/logo.svg';

import {ReactComponent as FacebookIcon } from '../images/icon-facebook.svg';

import {ReactComponent as TwitterIcon} from '../images/icon-twitter.svg';
import {ReactComponent as PinterestIcon} from '../images/icon-pinterest.svg';
import {ReactComponent as InstagramIcon} from '../images/icon-instagram.svg';


const FooterApp = () => {

    return (
        <div className='footer-app  container-full-size'>
            <div className='footer-app-container margin-app'>
                
                <img src={Logo} alt='logo.svg'/>

                <div className='footer-item-container'>
                    <h1>Features</h1>
                    <a>Link Shortening</a>
                    <a>Branded Links</a>
                    <a>Analytics</a>
                </div>

                <div className='footer-item-container'>
                    <h1>Resources</h1>
                    <a>Blog</a>
                    <a>Developers</a>
                    <a>Support</a>
                </div>

                <div className='footer-item-container'>
                    <h1>Company</h1>
                    <a>About</a>
                    <a>Our Teams</a>
                    <a>Careers</a>
                    <a>Contact</a>
                </div>

                <div className='social-networks'>
                    
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <PinterestIcon/>
                    <InstagramIcon/>

                </div>
            </div>
            
        </div>
    )
}

export default FooterApp