import React from 'react';
import FooterWrapper from '../styles/Footer';
import InstagramLogo from '../images/products/instagram.png';
import FacebookLogo from '../images/products/facebook.png';
import TwitterLogo from '../images/products/twitter.png';
import ContactUsLogo from '../images/products/contact-us.png';

/**
 * Home component to render items in the UI
 * @param {object} props  Create component properties
 * @returns {JSX.Element}  Create component instance
 */
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-content">
        <div className="company-name">KM Organics</div>
        <div className="get-in-touch">Get In Touch</div>
        <div>
          <a href="https://wa.me/7731924335" target="_blank" rel="noopener noreferrer">
            <img
              src={ContactUsLogo}
              alt="gmail"
              width="50"
              height="50"
              style={{ margin: '0.5rem' }}
            />
          </a>
          <a
            href="https://www.instagram.com/km_organics_handmade_soaps/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramLogo}
              alt="instagram"
              width="50"
              height="50"
              style={{ margin: '0.5rem' }}
            />
          </a>
          <a
            href="https://www.facebook.com/handmade.natural.products/?ref=pages_you_manage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FacebookLogo}
              alt="facebook"
              width="50"
              height="50"
              style={{ margin: '0.5rem' }}
            />
          </a>
          <a href="https://twitter.com/KMHandmadeSoaps" target="_blank" rel="noopener noreferrer">
            <img
              src={TwitterLogo}
              alt="twitter"
              width="50"
              height="50"
              style={{ margin: '0.5rem' }}
            />
          </a>
        </div>

        <div className="footer-sub-text">
          KM Organics manifactures pure natural, healthy and quality beauty products industry Terms
          of Service and Privacy Policy.
        </div>
        <div className="footer-sub-text" style={{ paddingBottom: '7rem' }}>
          Copyright &copy;2022 KM Organics.
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
