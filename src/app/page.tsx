"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import { PageNav } from '@/components/common/PageNav';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';
import React from 'react';
import Image from 'next/image';

const Navigation = () => (
  <PageNav position="top" />
);

const Home = () => {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div className="max-w-7xl mx-auto">
        <Navigation />
        <section id="hero" className="bg-gradient-to-r from-[#FDFEFF] to-[#EEF2FF] py-18">
          <SimpleHero
            title="Welcome to Our Brand"
            description="Delivering excellence through innovative solutions."
            primaryButtonText="Get Started"
            secondaryButtonText="Learn More"
          />
        </section>
        <section id="about" className="bg-white py-18">
          <MinimalAbout description="We are dedicated to providing high-quality services that elevate your experience." />
          <SimpleKPIBento
            items={[
              { value: "Global Reach", description: "We operate in over 50 countries." },
              { value: "Customer Satisfaction", description: "95% satisfaction rate from our clients." },
              { value: "Innovation", description: "Continuous improvements year-on-year." }
            ]}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          />
        </section>
        <section id="services" className="bg-soft-noise py-18">
          {/* Placeholder for services */}
        </section>
        <section id="testimonials" className="bg-gray-200 py-18">
          {/* Placeholder for testimonials */}
        </section>
        <section id="terms" className="bg-white py-18">
          {/* Placeholder for terms */}
        </section>
        <section id="privacy" className="bg-white py-18">
          {/* Placeholder for privacy */}
        </section>
        <section id="contact" className="bg-gradient-to-r from-[#FFFFFF] to-[#F7F7FF] py-18">
          {/* Inline form component here */}
        </section>
        <GradientFooter
          items={[
            { label: "Privacy Policy", onClick: () => {} }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
};

export default Home;
