import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: #fafafa;
  display: flex;
  margin-top: 150px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 69px 0px;
  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

export const TestimonialContent = styled.div`
  display: flex;
  margin-top: 27px;
  width: 100%;
  max-width: 1440px;
  flex-direction: column;
  align-items: center;

  .customer-list {
    display: flex;
  }
`;

export const TestimonialTitle = styled.h2`
  color: #484848;
  text-align: center;
  font: 46px Volkhov, sans-serif;
  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const TestimonialDescription = styled.p`
  color: #8a8a8a;
  text-align: center;
  margin-top: 28px;
  font: 16px/162.5% Poppins, sans-serif;
`;

export const TestimonialImage = styled.img`
  aspect-ratio: 3.57;
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 20px 60px 0px rgba(46, 33, 61, 0.08);
  margin-top: 73px;
  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

export const TestimonialIndicator = styled.img`
  aspect-ratio: 2.33;
  cursor: pointer;
  object-fit: contain;
  width: 112px;
  margin-top: 59px;
  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;
