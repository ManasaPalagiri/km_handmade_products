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
                      <table>
                        <tr>
                          <th>Weight</th>
                          <td>:&nbsp;&nbsp;100 grams</td>
                        </tr>
                        <tr>
                          <th>Goat Milk Soap base</th>
                          <td>:&nbsp;&nbsp;100 grams</td>
                        </tr>
                        <tr>
                          <th>Olive Oil</th>
                          <td>:&nbsp;&nbsp;2 tsp</td>
                        </tr>
                        <tr>
                          <th>Turmeric Powder</th>
                          <td>:&nbsp;&nbsp;1 tsp</td>
                        </tr>
                        <tr>
                          <th>Tumeric essential oil</th>
                          <td>:&nbsp;&nbsp;15 drops</td>
                        </tr>
                        <tr>
                          <th>Frankincense essential oil</th>
                          <td>:&nbsp;&nbsp;15 drops</td>
                        </tr>
                        <tr>
                          <th>Myrrh essential oil</th>
                          <td>:&nbsp;&nbsp;15 drops</td>
                        </tr>
                        <tr>
                          <th>Others</th>
                          <td>:&nbsp;&nbsp;Vitamin E</td>
                        </tr>
                      </table>
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
