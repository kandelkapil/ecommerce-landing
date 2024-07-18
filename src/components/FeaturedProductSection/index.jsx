import React from "react";
import {
  SectionWrapper,
  ProductImage,
  ProductDetails,
  ProductCategory,
  ProductName,
  ProductDescription,
  ProductSize,
  SizeLabel,
  SizeValue,
  ProductPrice,
  BuyNowButton,
} from "./FeaturedProductSection.Styled";
import WhiteMan from "../../assets/white-man.png";

const FeaturedProductSection = () => (
  <SectionWrapper id="packages">
    <ProductImage src={WhiteMan} alt="Featured Product" />
    <ProductDetails>
      <ProductCategory>Women Collection</ProductCategory>
      <ProductName>Peaky Blinders</ProductName>
      <h3>DESCRIPTION</h3>
      <ProductDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Scelerisque duis.
      </ProductDescription>
      <ProductSize>
        <SizeLabel>Size:</SizeLabel>
        <SizeValue>M</SizeValue>
      </ProductSize>
      <ProductPrice>
        $100.<span style={{ fontSize: "24px" }}>00</span>
      </ProductPrice>
      <BuyNowButton>Buy Now</BuyNowButton>
    </ProductDetails>
  </SectionWrapper>
);

export default FeaturedProductSection;
