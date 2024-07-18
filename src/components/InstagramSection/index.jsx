import React from "react";
import {
  SectionWrapper,
  SectionTitle,
  SectionDescription,
  ImageGrid,
  InstagramImage,
} from "./InstagramSection.Styled";
import { images } from "./constant";

const InstagramSection = () => (
  <SectionWrapper>
    <SectionTitle>Follow Us On Instagram</SectionTitle>

    <SectionDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
      ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
    </SectionDescription>

    <ImageGrid>
      {images.map((image, index) => (
        <InstagramImage
          key={index}
          src={image.src}
          alt={image.alt}
          index={index}
          array={images}
        />
      ))}
    </ImageGrid>
  </SectionWrapper>
);

export default InstagramSection;
