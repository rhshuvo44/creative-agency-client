import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';

const Home = () => {
    return (
        <>
            <header>
                <Navbar/>
                <Banner/>
            </header>
        </>
    );
};

export default Home;