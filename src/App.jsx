import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandSection from './components/BrandSection';
import DealsSection from './components/DealsSection';
import NewArrivalsSection from './components/NewArrivalsSection';
import FeaturedProductSection from './components/FeaturedProductSection';
import FeatureSection from './components/FeatureSection';
import InstagramSection from './components/InstagramSection';
import TestimonialSection from './components/TestimonialSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import './index.css'

const PageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 0 29px;
`;

const ContentWrapper = styled.main`
  display: flex;
  width: 100%;
  // max-width: 1560px;
  flex-direction: column;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const App = () => (
  <PageWrapper>
    <ContentWrapper>
      <Header />
      <HeroSection />
      <BrandSection />
      <DealsSection />
      <NewArrivalsSection />
      <FeaturedProductSection />
      <FeatureSection />
      <InstagramSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </ContentWrapper>
  </PageWrapper>
);

export default App;
