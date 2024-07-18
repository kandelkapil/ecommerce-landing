import React from "react";
import { BrandWrapper, BrandLogo } from "./BrandSection.Styled";
import { brands } from "./constant";

const BrandSection = () => (
  <BrandWrapper>
    {brands?.map((brand, index) => (
      <BrandLogo key={index} src={brand.src} alt={brand.alt} />
    ))}
  </BrandWrapper>
);

export default BrandSection;
