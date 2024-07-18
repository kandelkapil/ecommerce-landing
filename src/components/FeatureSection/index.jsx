import React from "react";
import {
  SectionWrapper,
  FeatureContainer,
  FeatureItem,
  FeatureIcon,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
} from "./FeatureSection.Styled";
import Feature1 from "../../assets/feature-1.png";
import Feature2 from "../../assets/feature-2.png";
import Feature3 from "../../assets/feature-3.png";
import Feature4 from "../../assets/feature-4.png";

const features = [
  {
    icon: Feature1,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: Feature2,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: Feature3,
    title: "Free Shipping",
    description: "Order over $150",
  },
  {
    icon: Feature4,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const FeatureSection = () => (
  <SectionWrapper>
    <FeatureContainer>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          <FeatureIcon src={feature.icon} alt={feature.title} />
          <FeatureContent>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureContent>
        </FeatureItem>
      ))}
    </FeatureContainer>
  </SectionWrapper>
);

export default FeatureSection;
