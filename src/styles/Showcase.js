import styled from 'styled-components';

const ShowcaseWrapper = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  .home-page-show-case {
    width: 100%;
    height: 80rem;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      height: 50rem;
    }
  }
  .image-content {
    position: absolute;
    color: white;
    top: 25rem;
    left: 14rem;
    font-size: 5rem;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      display: none;
    }
  }

  .side-image-content {
    font-size: 2rem;
    width: 43%;
    font-weight: 100;
    margin-top: 1rem;
  }

  .side-image-button {
    background-color: #ffd0ad;
    border-radius: 4rem;
    padding: 1.5rem;
    width: 15rem;
    margin-top: 3rem;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
`;

export default ShowcaseWrapper;
