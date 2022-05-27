import React from 'react';
import HeaderWrapper from '../styles/Header';
import HandmadeLogo from '../images/handmade-logo.png';
import ContactUs from '../images/products/contact-us.png';

/**
 * Home component to render items in the UI
 * @param {object} props  Create component properties
 * @returns {JSX.Element}  Create component instance
 */
const Header = () => {
  return (
    <HeaderWrapper>
      <div className="offer-text">20% OFF on Handmade Soaps</div>
      <div style={{ display: 'flex', padding: '1rem' }}>
        <img
          src={HandmadeLogo}
          alt="handmade-soap-logo"
          width="50"
          height="50"
          className="handmade-logo"
        />
        <div className="header-info"> KM Organics</div>
        <a
          className="contact-info"
          href="https://wa.me/7731924335"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-us">For Order:</div>
          <img src={ContactUs} height="50" width="50" alt="contact-us" />
          <div className="contact-us">Contact Us</div>
        </a>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
