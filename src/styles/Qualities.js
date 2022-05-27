import styled from 'styled-components';

const QualitiesWrapper = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  .product-qualities {
    background-color: #ffd0ad;
    text-align: center;
    color: rgb(21, 71, 71);
  }
  .sub-quality-text {
    color: rgb(21, 71, 71);
    font-size: 1.5rem;
    font-weight: 400;
    margin: 2rem auto;
  }
  .qualities-list {
    display: flex;
    justify-content: center;
    padding: 5rem;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      display: unset;
      padding: unset;
    }
  }
  .product-main-desc {
    font-size: 3.5rem;
    font-weight: 500;
    padding-top: 4rem;
  }
  .quality-name {
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 2rem;
  }
  .quality-desc {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.3;
  }
`;

export default QualitiesWrapper;
