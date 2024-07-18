import React from "react";
import {
  SectionWrapper,
  TestimonialContent,
  TestimonialTitle,
  TestimonialDescription,
  TestimonialImage,
  TestimonialIndicator,
} from "./TestimonialSection.Styled";

const TestimonialSection = () => (
  <SectionWrapper>
    <TestimonialContent>
      <TestimonialTitle>This Is What Our Customers Say</TestimonialTitle>
      <TestimonialDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis
      </TestimonialDescription>
      <TestimonialImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/472c4dc38b34183e4600c6144f983e3028f7df5c361d4d47bb0970313e0ffee1?apiKey=f85969f40c2d40348177d09483dc30e5&"
        alt="Customer testimonial"
      />
      <TestimonialIndicator
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/22a63dad549d12ff740cee8b371d11988150dd488de118583ad45bb577c8026a?apiKey=f85969f40c2d40348177d09483dc30e5&"
        alt="Testimonial indicator"
      />
    </TestimonialContent>
  </SectionWrapper>
);

export default TestimonialSection;
