import React from 'react';
import QualitiesWrapper from '../styles/Qualities';
import CleanIngredients from '../images/clean-ingriedients.png';
import EcoFriendly from '../images/eco-friendly.png';
import PlanetEarth from '../images/planet-earth.png';
import ChemicalFree from '../images/chemical-free.png';

/**
 * Home component to render items in the UI
 * @param {object} props  Create component properties
 * @returns {JSX.Element}  Create component instance
 */
const Qualities = () => {
  return (
    <QualitiesWrapper>
      <div className="product-qualities">
        <div className="product-main-desc">Give your skin a healing feeling.</div>
        <div className="sub-quality-text">
          Handmade soap retains all the moisturizing natural glycerin which also helps produce a
          rich luxurious lather. Thus skin-nourishing ingredients, plus superfatting and natural
          saponification create a soap bar full of moisturizing, natural oils, and natural glycerin.
        </div>
        <div className="qualities-list">
          <div>
            <img src={CleanIngredients} alt="clean-ingriedients" height="100" width="100" />
            <div className="quality-name">Clean Ingredients</div>
            <div className="quality-desc">
              We use more costly organic virgin, unrefined oils, and butters whenever possible
              because they are less refined preserving more of their inherent nutrients.
            </div>
          </div>
          <div>
            <img src={EcoFriendly} alt="eco-friendly" height="100" width="100" />
            <div className="quality-name">Eco-Friendly</div>
            <div className="quality-desc">
              Natural soap companies like ours tend to use eco-friendly materials for packaging and
              shipping and we use materials that can really be recycled.
            </div>
          </div>
          <div>
            <img src={PlanetEarth} alt="planet-earth" height="100" width="100" />
            <div className="quality-name">Quality Assured</div>
            <div className="quality-desc">
              Natural soaps are made with higher quality ingredients like natural and organic oils
              and butters, pure plant essential oils, nature identical oils, Natural soap colors.
            </div>
          </div>
          <div>
            <img src={ChemicalFree} alt="chemical-free" height="100" width="100" />
            <div className="quality-name">Chemical Free</div>
            <div className="quality-desc">
              Natural soaps doesn`&apos;`t contains synthetic ingredients, artificial fragrances or
              perfumes, artificial colors, detergents, synthetic preservatives.
            </div>
          </div>
        </div>
      </div>
    </QualitiesWrapper>
  );
};

export default Qualities;
