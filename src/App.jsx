import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BrandSection from "./components/BrandSection";
import DealsSection from "./components/DealsSection";
import NewArrivalsSection from "./components/NewArrivalsSection";
import FeaturedProductSection from "./components/FeaturedProductSection";
import FeatureSection from "./components/FeatureSection";
import InstagramSection from "./components/InstagramSection";
import TestimonialSection from "./components/TestimonialSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import "./index.css";
import { ContentWrapper, PageWrapper } from "./App.styled";

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
