import React, { useState } from "react";
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

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e?.target?.value);
  };

  const handleSubscribe = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(email);

    if (isValid) {
      alert("Subscription successful! Welcome to our newsletter.");
      setEmail("");
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
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
            value={email}
            onChange={(e) => handleInputChange(e)}
            type="email"
            placeholder="michael@ymail.com"
            aria-label="Email for newsletter"
          />
          <SubscribeButton onClick={handleSubscribe}>
            Subscribe Now
          </SubscribeButton>
        </ContentWrapper>
        <RightImage src={Long2} alt="Newsletter decoration right" />
      </SectionWrapper>
    </SectionContainer>
  );
};

export default NewsletterSection;
