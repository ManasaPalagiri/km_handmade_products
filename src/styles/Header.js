import styled from 'styled-components';

const HeaderWrapper = styled.div`
  .offer-text {
    background-color: rgb(21, 71, 71);
    color: #fff !important;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.025em;
    line-height: 3;
  }

  .header-info {
    background-color: #fff;
    text-align: left;
    color: #1a1a1a;
    font-size: 28px;
    width: 85%;
    display: flex;
    align-items: center;
    font-family: sans-serif;
    font-weight: bold;
    color: rgb(21, 71, 71) !important;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 24px;
    }
  }

  .handmade-logo {
    margin-right: 0.4rem;
  }
  .contact-us {
    margin: auto;
    text-align: end;
    color: rgb(21, 71, 71);
    font-size: 1.5rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      display: none;
    }
  }
  .contact-info {
    border: none;
    background-color: #fff;
    color: rgb(21, 71, 71);
    text-decoration: none;
    display: flex;
  }
`;

export default HeaderWrapper;
