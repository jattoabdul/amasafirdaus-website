import React from 'react';
import './Footer.scss';


const Footer = props => {
    return (
        <footer className="Footer">
            <div className="footer-logo">
                <div className="footer-logo-bg">Firdaus</div>
            </div>
            <div className="footer-socials">
                <span>Facebook</span> . <span>Instagram</span>
            </div>
            <div className="footer-copyright">
                <span>©2018 All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;