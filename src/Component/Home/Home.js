import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Partner from './Partner';

const Home = () => {
    return (
        <>
            <header>
                <Navbar/>
                <Banner/>
                <Partner/>
            </header>
        </>
    );
};

export default Home;