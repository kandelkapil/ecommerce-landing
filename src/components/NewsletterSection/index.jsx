import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  LeftImage,
  ContentWrapper,
  NewsletterTitle,
  NewsletterDescription,
  EmailInput,
  SubscribeButton,
  RightImage,
} from "./NewsLetterSection.Styled";
import Long1 from "../../assets/long-1.png";
import Long2 from "../../assets/long-2.png";

const NewsletterSection = () => (
  <SectionContainer>
    <SectionWrapper>
      <LeftImage src={Long1} alt="Newsletter decoration left" />
      <ContentWrapper>
        <NewsletterTitle>Subscribe To Our Newsletter</NewsletterTitle>
        <NewsletterDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin.
        </NewsletterDescription>
        <EmailInput
          type="email"
          placeholder="michael@ymail.com"
          aria-label="Email for newsletter"
        />
        <SubscribeButton>Subscribe Now</SubscribeButton>
      </ContentWrapper>
      <RightImage src={Long2} alt="Newsletter decoration right" />
    </SectionWrapper>
  </SectionContainer>
);

export default NewsletterSection;
