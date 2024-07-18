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
import { features } from "./constant";

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
