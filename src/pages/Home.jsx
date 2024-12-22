import React from 'react';
import Banner from '../components/Banner';
import FeatureCards from '../components/FeatureCards';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureCards></FeatureCards>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;