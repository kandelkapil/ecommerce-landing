import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  margin-top: 94px;
  align-self: center;
  width: 85%;
  gap: 20px;

  @media (max-width: 1024px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

export const LeftColumn = styled.div`
  border-radius: 10px;
  background-color: #e0e0e0;
  display: flex;
  flex-grow: 1;
  padding-top: 80px;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1024px) {
    margin-top: 35px;
  }
`;

export const LeftImage = styled.img`
  aspect-ratio: 0.71;
  object-fit: cover;
  object-position: center;
  width: 100%;
  margin-top: 106px;

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

export const CenterColumn = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  text-align: center;
  line-height: 100%;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 35px;
  }
`;

export const TopImage = styled.img`
  aspect-ratio: 2.86;
  object-fit: cover;
  object-position: center;
  width: 100%;
  align-self: stretch;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const HeroTitle = styled.h2`
  color: #484848;
  letter-spacing: -3.64px;
  margin-top: 50px;
  font: 91px Poppins, sans-serif;

  @media (max-width: 1024px) {
    margin-top: 40px;
    font-size: 40px;
  }
`;

export const HeroSubtitle = styled.h3`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #484848;
  letter-spacing: -10.29px;
  border: 1px solid #484848;
  margin-top: 40px;
  font: 187px Poppins, sans-serif;

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const HeroText = styled.p`
  color: #484848;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 35px;
  font: 400 20px Poppins, sans-serif;
`;

export const ShopNowButton = styled.button`
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 20px 35px 0px rgba(0, 0, 0, 0.15);
  background-color: #000;
  margin-top: 27px;
  color: #fff;
  justify-content: center;
  padding: 23px 60px;
  font: 16px Poppins, sans-serif;

  @media (max-width: 1024px) {
    padding: 23px 20px;
  }
`;

export const BottomImage = styled.img`
  aspect-ratio: 2.86;
  object-fit: cover;
  object-position: center;
  width: 100%;
  align-self: stretch;
  margin-top: 37px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const RightColumn = styled.div`
  border-radius: 10px;
  background-color: #e0e0e0;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 80px 60px 0;

  @media (max-width: 1024px) {
    margin-top: 35px;
    padding: 80px 20px 0;
  }
`;

export const RightImage = styled.img`
  aspect-ratio: 0.44;
  object-fit: cover;
  object-position: center;
  width: 249px;
  max-width: 100%;
  margin-top: 106px;

  @media (max-width: 1024px) {
    margin: 40px 0 0 3px;
  }
`;

export const SocialIcons = styled.div`
  align-self: end;
  display: flex;
  margin-top: 699px;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    margin-top: 40px;
    margin-left: auto;
    align-self: center;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  gap: 20px;
`;

export const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 56px;
`;
