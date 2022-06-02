import React from 'react';
import ListWrapper from '../styles/ProductList';
import SoapsList from '../data/SoapsList';
import InfoIcon from '@material-ui/icons/Info';

/**
 * Home component to render items in the UI
 * @param {object} props  Create component properties
 * @returns {JSX.Element}  Create component instance
 */
const ProductList = () => {
  return SoapsList.map((item) => {
    return (
      <ListWrapper>
        <div className="products-info">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <div className="wrapper-item">
                <div className="container-item">
                  <img src={item.image} height="400" width="300" alt="product-card" />
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <div style={{ marginBottom: '1rem' }}>{item.name}</div>
                        <p>Rs.{item.cost} /-</p>
                      </div>
                    </div>
                  </div>
                  <div className="inside">
                    <div className="icon"><InfoIcon /></div>

                    <div className="contents">
                      <h1>Ingredients for {item.name}</h1>
                      <p>{item.ingredients}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ListWrapper>
    );
  });
};

export default ProductList;
