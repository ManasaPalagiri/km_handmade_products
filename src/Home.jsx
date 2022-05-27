/**
 * ©2021 Intuit Inc. All rights reserved. Unauthorized reproduction is a violation of applicable law.
 * This material contains certain confidential and proprietary information and trade secrets of Intuit Inc.
 */
import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Qualities from './components/Qualities';
import Showcase from './components/Showcase';

const ProductTextWrap = styled.div`
   font-size: 3.5rem;
   font-weight: 500;
   margin-top: 4rem;
   margin-bottom: 4rem;
   text-align: center;
   font-family: 'Roboto Condensed', sans-serif;
 `;

/**
 * Home component to render items in the UI
 * @param {object} props  Create component properties
 * @returns {JSX.Element}  Create component instance
 */
const Home = () => {
    return (
        <div style={{ overflow: 'scroll' }}>
            <Header />
            <Showcase />
            <Qualities />
            <ProductTextWrap>Popular Handmade Soaps</ProductTextWrap>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <ProductList />
            </div>
            <Footer />
        </div>
    );
};
export default Home;
