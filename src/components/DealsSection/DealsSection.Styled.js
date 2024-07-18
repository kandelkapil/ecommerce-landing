import styled from "styled-components";

export const DealsSection = styled.section`
  background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
  align-self: stretch;
  margin-top: 100px;
  margin-left: auto;
  width: 85%;
  padding: 68px 0;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding-left: 20px;
    margin-top: 40px;
  }
`;

export const DealsContainer = styled.div`
  gap: 20px;
  display: flex;
  width: 100%;
  max-width: 96.5%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

export const DealsContent = styled.div`
  display: flex;
  margin-top: 7px;
  flex-direction: column;
  width: 35%;

  .slider {
    display: flex;
    width: 112px;
    gap: 16px;
    align-self: flex-end;

    img {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const DealsHeader = styled.h2`
  color: #484848;
  font: 400 46px Volkhov, sans-serif;

  @media (max-width: 1024px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

export const DealsDescription = styled.p`
  color: #8a8a8a;
  margin-top: 41px;
  font: 400 16px/26px Poppins, sans-serif;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const BuyNowButton = styled.button`
  border-radius: 10px;
  box-shadow: 0px 20px 35px 0px rgba(0, 0, 0, 0.15);
  background-color: #000;
  margin-top: 43px;
  width: 207px;
  max-width: 100%;
  color: #fff;
  text-align: center;
  padding: 21px 60px;
  font: 400 16px/100% Poppins, sans-serif;
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 40px;
    padding: 21px 20px;
  }
`;

export const HurryText = styled.p`
  color: #484848;
  margin-top: 59px;
  font: 500 28px Poppins, sans-serif;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 19px;

  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    gap: 20px;
    max-width: 100%;
    padding-right: 20px;
  }
`;

export const TimerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #484848;
  font-weight: 400;

  @media (max-width: 1024px) {
    margin-top: 30px;
  }
`;

export const TimerValue = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  font: 32px/100% "Digital Numbers", sans-serif;

  @media (max-width: 1024px) {
    padding: 0 12px;
  }
`;

export const TimerLabel = styled.div`
  text-align: center;
  margin-top: 21px;
  font: 24px/120% Poppins, sans-serif;
`;

export const BrandLogo = styled.img`
  aspect-ratio: 2.33;
  object-fit: contain;
  width: 112px;
  align-self: flex-end;
  margin-top: 54px;
  max-width: 100%;

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  aspect-ratio: 0.69;
  width: 26%;
  margin-left: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 40px;
    margin-left: 0;
  }
`;

export const CardImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const CardContent = styled.div`
  position: relative;
  margin-left: 14px;
  margin-bottom: 24px;
  backdrop-filter: blur(3.5px);
  background-color: #fff;
  display: flex;
  margin-top: 348px;
  width: 217px;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 39px 26px;

  @media (max-width: 1024px) {
    margin-top: 40px;
    padding: 20px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 8px;
  font-size: 16px;
  line-height: 150%;
`;

export const CardNumber = styled.span`
  font-family: Poppins, sans-serif;
`;

export const CardDivider = styled.span`
  aspect-ratio: 25;
  width: 27px;
  stroke-width: 1px;
  stroke: #484848;
  border: 1px solid #484848;
  margin: auto 0;
`;

export const CardTitle = styled.span`
  font-family: Poppins, sans-serif;
`;

export const CardDiscount = styled.div`
  margin-top: 16px;
  font: 28px/120% Poppins, sans-serif;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 39%;
  margin-left: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    margin-top: 40px;
    margin-left: 0;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

export const LargeImage = styled.img`
  aspect-ratio: 0.76;
  object-fit: cover;
  width: 64%;
  flex-grow: 1;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 24px;
  }
`;

export const SmallImage = styled.img`
  aspect-ratio: 0.43;
  object-fit: cover;
  width: 210px;
  max-width: 100%;
  flex-grow: 1;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 24px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-top: -30px;
  width: 70%;

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

const Dot = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
`;

export const ActiveDot = styled(Dot)`
  border: 1px solid #000;
  padding: 8px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 11px;
    height: 11px;
    background-color: #000;
    border-radius: 50%;
  }
`;

export const InactiveDot = styled(Dot)`
  background-color: #b6b6b6;
`;
