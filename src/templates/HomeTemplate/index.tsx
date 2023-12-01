import React from 'react';
import CreonPassSection from './components/CreonPassSection';
import HeroSection from './components/HeroSection';
import OurMissionSection from './components/OurMissionSection';
import ProfitingThroughSection from './components/ProfitingThroughSection';
import BenefitsSection from './components/BenefitsSection';
import MarketSection from './components/MarketSection';

const HomeTemplate = () => {
    return (
        <>
            <SmallScreen />
            <LargeScreen />
        </>
    );
};

export default HomeTemplate;

const LargeScreen = () => {
    return (
        <div className="hidden xl:flex flex-1 flex-col">
            <HeroSection />
            <CreonPassSection />
            <ProfitingThroughSection />
            <OurMissionSection />
            <BenefitsSection />
            <MarketSection />
        </div>
    );
};

const SmallScreen = () => {
    return (
        <div className="xl:hidden flex flex-1 flex-col">
            <HeroSection />
            <OurMissionSection />
            <ProfitingThroughSection />
            <MarketSection />
            <CreonPassSection />
            <BenefitsSection />
        </div>
    );
};
