import React from 'react';
import Banner from '../components/Banner';
import FeatureCards from '../components/FeatureCards';
import FAQ from '../components/FAQ';
import ExtaCard from '../components/ExtaCard';
import OnlineEducation from '../components/OnlineEducation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureCards></FeatureCards>
            <FAQ></FAQ>
            <ExtaCard></ExtaCard>
            <OnlineEducation></OnlineEducation>
        </div>
    );
};

export default Home;