import React from "react";
import {
  DealsSection,
  DealsContainer,
  DealsContent,
  DealsHeader,
  DealsDescription,
  BuyNowButton,
  HurryText,
  TimerContainer,
  TimerItem,
  TimerValue,
  TimerLabel,
  BrandLogo,
  CardWrapper,
  CardImage,
  CardContent,
  CardHeader,
  CardNumber,
  CardDivider,
  CardTitle,
  CardDiscount,
  GalleryWrapper,
  GalleryContainer,
  LargeImage,
  SmallImage,
  PaginationWrapper,
  ActiveDot,
  InactiveDot,
} from "./DealsSection.Styled";
import BlackLady from "../../assets/black-lady.png";
import BlueLady from "../../assets/blue-lady.png";
import WhiteLady from "../../assets/white-lady.png";

import ArrowLeft from "../../assets/arrowLeft.svg";
import ArrowRight from "../../assets/arrowRight.svg";

const DealsOfTheMonth = () => {
  const timerData = [
    { value: "02", label: "Days" },
    { value: "06", label: "Hr" },
    { value: "05", label: "Mins" },
    { value: "30", label: "Sec" },
  ];

  return (
    <DealsSection id="deals">
      <DealsContainer>
        <DealsContent>
          <DealsHeader>Deals Of The Month</DealsHeader>
          <DealsDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </DealsDescription>
          <BuyNowButton>Buy Now</BuyNowButton>
          <HurryText>Hurry, Before It's Too Late!</HurryText>

          <TimerContainer>
            {timerData.map((item, index) => (
              <TimerItem key={index}>
                <TimerValue>{item.value}</TimerValue>
                <TimerLabel>{item.label}</TimerLabel>
              </TimerItem>
            ))}
          </TimerContainer>
          <BrandLogo
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1698f9569e39976dab36d4a5cae6785f7c63b4f19258ca1a095a7fe17b9d4a0f?apiKey=f85969f40c2d40348177d09483dc30e5&"
            alt="Arrow Left"
          />
        </DealsContent>

        <CardWrapper>
          <div className="cards">
            <CardImage src={BlackLady} alt="Deal of the month" />
          </div>
          <CardContent>
            <CardHeader>
              <CardNumber>01</CardNumber>
              <CardDivider />
              <CardTitle>Spring Sale</CardTitle>
            </CardHeader>
            <CardDiscount>30% OFF</CardDiscount>
          </CardContent>
        </CardWrapper>

        <GalleryWrapper>
          <GalleryContainer>
            <LargeImage src={BlueLady} alt="Large product image" />
            <SmallImage src={WhiteLady} alt="Small product image" />
          </GalleryContainer>
        </GalleryWrapper>
      </DealsContainer>

      <PaginationWrapper>
        <ActiveDot />
        <InactiveDot />
        <InactiveDot />
        <InactiveDot />
      </PaginationWrapper>
    </DealsSection>
  );
};

export default DealsOfTheMonth;
