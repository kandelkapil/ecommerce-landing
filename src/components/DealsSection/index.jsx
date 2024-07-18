import React from "react";
import { useState } from "react";
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
import {
  imageGroup,
  dotsItems,
  timerData,
  BlackLady,
  BlueLady,
  WhiteLady,
} from "./constant";

const DealsOfTheMonth = () => {
  const [images, setImages] = useState([BlackLady, BlueLady, WhiteLady]);
  const [dots, setDots] = useState(dotsItems?.[0]);

  const handleImage = (item) => {
    setDots(item);
    const imageList = imageGroup?.slice(item, item + 3);
    setImages(imageList);
  };

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
            <CardImage src={images?.[0] || ""} alt="Deal of the month" />
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
            <LargeImage src={images?.[1] || ""} alt="Large product image" />
            <SmallImage src={images?.[2] || ""} alt="Small product image" />
          </GalleryContainer>
        </GalleryWrapper>
      </DealsContainer>

      <PaginationWrapper>
        {dotsItems.map((item) => (
          <>
            {item === dots ? (
              <ActiveDot onClick={() => handleImage(item)} />
            ) : (
              <InactiveDot onClick={() => handleImage(item)} />
            )}
          </>
        ))}
      </PaginationWrapper>
    </DealsSection>
  );
};

export default DealsOfTheMonth;
