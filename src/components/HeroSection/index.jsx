import React from "react";
import { Link } from "react-scroll";
import {
  HeroWrapper,
  LeftColumn,
  LeftImage,
  CenterColumn,
  TopImage,
  HeroTitle,
  HeroSubtitle,
  HeroText,
  ShopNowButton,
  BottomImage,
  RightColumn,
  RightImage,
  SocialIcons,
  IconWrapper,
  Icon,
} from "./HeroSection.Styled";
import Sale1 from "../../assets/sale-1.png";
import Sale2 from "../../assets/sale-2.png";
import Sale3 from "../../assets/sale-3.png";
import Sale4 from "../../assets/sale-4.png";

const HeroSection = () => (
  <HeroWrapper id="home">
    <LeftColumn>
      <LeftImage src={Sale1} alt="Left column decorative image" />
    </LeftColumn>

    <CenterColumn>
      <TopImage src={Sale2} alt="Top decorative image" />

      <HeroTitle>ULTIMATE</HeroTitle>

      <HeroSubtitle>SALE</HeroSubtitle>

      <HeroText>NEW COLLECTION</HeroText>

      <ShopNowButton>SHOP NOW</ShopNowButton>

      <BottomImage src={Sale3} alt="Bottom decorative image" />
    </CenterColumn>

    <RightColumn>
      <RightImage src={Sale4} alt="Right column decorative image" />
    </RightColumn>

    <SocialIcons>
      <IconWrapper>
        <Icon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0de93acfc5097bf06bd62beeedaa6b8b9fa4634ab49f6ddf91b30281c4d975b2?apiKey=f85969f40c2d40348177d09483dc30e5&"
          alt="Social Icon 1"
        />

        <Link to="home" smooth={true} duration={1000}>
          <Icon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b89391f8215e66b651b13b2f8e5cc640561f30f681a1f84db4b99ab04af0f597?apiKey=f85969f40c2d40348177d09483dc30e5&"
            alt="Social Icon 2"
          />
        </Link>
      </IconWrapper>
    </SocialIcons>
  </HeroWrapper>
);

export default HeroSection;
