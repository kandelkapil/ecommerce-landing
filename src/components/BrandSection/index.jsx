import React from "react";
import { BrandWrapper, BrandLogo } from "./BrandSection.Styled";
import Chanel from "../../assets/chanel.png";
import LuisVutton from "../../assets/luis-vutton.png";
import Prada from "../../assets/prada.png";
import CalvinKlein from "../../assets/calvin-klein.png";
import Denim from "../../assets/denim.png";

const brands = [
  {
    src: Chanel,
    alt: "chanel 1 logo",
  },
  {
    src: LuisVutton,
    alt: "luis vutton logo",
  },
  {
    src: Prada,
    alt: "prada logo",
  },
  {
    src: CalvinKlein,
    alt: "calvin clein logo",
  },
  {
    src: Denim,
    alt: "denim logo",
  },
];

const BrandSection = () => (
  <BrandWrapper>
    {brands.map((brand, index) => (
      <BrandLogo key={index} src={brand.src} alt={brand.alt} />
    ))}
  </BrandWrapper>
);

export default BrandSection;
