import React from 'react';
import CreonPassSection from './components/creon-pass-section/CreonPassSection';
import HeroSection from './components/hero-section/HeroSection';
import OurMissionSection from './components/our-mission-section/OurMissionSection';
import ProfitingThroughSection from './components/profiting-through-section/ProfitingThroughSection';
import BenefitsSection from './components/benefits-section/BenefitsSection';
import MarketSection from './components/market-section/MarketSection';

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
