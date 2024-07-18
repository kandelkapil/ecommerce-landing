import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  width: 100%;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  justify-content: center;
`;

export const LeftImage = styled.img`
  aspect-ratio: 0.48;
  object-fit: cover;
  width: 26%;
  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 29px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  width: 48%;
  margin: auto 0;
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const NewsletterTitle = styled.h2`
  color: #484848;
  text-align: center;
  font: 46px Volkhov, sans-serif;
  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const NewsletterDescription = styled.p`
  color: #8a8a8a;
  text-align: center;
  font: 16px/26px Poppins, sans-serif;
  margin-top: 41px;
`;

export const EmailInput = styled.input`
  box-shadow: 0px 163px 80px 0px rgba(0, 0, 0, 0.04),
    0px 105.648px 46.852px 0px rgba(0, 0, 0, 0.03),
    0px 62.785px 25.481px 0px rgba(0, 0, 0, 0.02),
    0px 32.6px 13px 0px rgba(0, 0, 0, 0.02),
    0px 13.281px 6.519px 0px rgba(0, 0, 0, 0.02),
    0px 3.019px 3.148px 0px rgba(0, 0, 0, 0.01);
  background-color: #fff;
  margin-top: 33px;
  padding: 32px 30px;
  font: 22px/118% Poppins, sans-serif;
  border: none;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const SubscribeButton = styled.button`
  font-family: Poppins, sans-serif;
  border-radius: 10px;
  box-shadow: 0px 20px 35px 0px rgba(0, 0, 0, 0.15);
  background-color: #000;
  width: 287px;
  align-self: center;
  color: #fff;
  text-align: center;
  justify-content: center;
  margin-top: 30px;
  padding: 22px 45px;
  font-size: 16px;
  line-height: 100%;
  border: none;
  cursor: pointer;
  @media (max-width: 1024px) {
    padding: 15px 20px;
  }
`;

export const RightImage = styled.img`
  aspect-ratio: 0.45;
  object-fit: cover;
  width: 25%;
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 29px;
  }
`;
