import React from "react";
import HeroSection from "../../Components/Home/Hero";
import ImpactSection from "../../Components/Home/Impact";
import StatsSection from "../../Components/Home/Stats";
import CausesSection from "../../Components/Home/Causes";
import CTASection from "../../Components/Home/CTA";
import CountdownBanner from "../../Components/Home/CountDown";


const Home = () => {

    return (
        <main className="min-h-screen bg-white font-sans">
            <HeroSection />
            <CountdownBanner />
            <ImpactSection />
            
            <StatsSection />
            <CausesSection />
            <CTASection />
        </main>
    );
};

export default Home;