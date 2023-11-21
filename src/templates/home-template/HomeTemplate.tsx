import React from 'react';
import CreonPassSection from './components/creon-pass-section/CreonPassSection';
import HeroSection from './components/hero-section/HeroSection';
import OurVisionSection from './components/our-vision-section/OurVisionSection';
import ProfitingThroughSection from './components/profiting-through-section/ProfitingThroughSection';
import BenefitsSection from './components/benefits-section/BenefitsSection';
import MarketSection from './components/market-section/MarketSection';

const HomeTemplate = () => {
    return (
        <div className="flex flex-1 flex-col">
            <HeroSection />
            <CreonPassSection />
            <ProfitingThroughSection />
            <OurVisionSection />
            <BenefitsSection />
            <MarketSection />
        </div>
    );
};

export default HomeTemplate;
