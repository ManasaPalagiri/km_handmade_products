import React from 'react';
import ShowcaseWrapper from '../styles/Showcase';
import ShowCaseBackgroundImage from '../images/home-page-2.jpg';

/**
 * Home component to render items in the UI
 * @param {object} props  Create component properties
 * @returns {JSX.Element}  Create component instance
 */
const Showcase = () => {
  return (
    <ShowcaseWrapper>
      <div style={{ position: 'relative', backgroundColor: 'rgb(255, 208, 173)' }}>
        <img src={ShowCaseBackgroundImage} alt="home-page-first" className="home-page-show-case" />
        <div className="image-content">
          <div>Best Handmade Soaps</div>
          <div className="side-image-content">
            KM Organics helps you discover the best handmade soaps for your skin, delivers them to
            your door and helps to makes beautiful and healthy skin.
          </div>
          <button
            className="side-image-button"
            type="submit"
            onClick={() => {
              window.open('https://wa.me/7731924335', '_blank', 'noopener,noreferrer');
            }}
          >
            Order Now
          </button>
        </div>
      </div>
    </ShowcaseWrapper>
  );
};

export default Showcase;
