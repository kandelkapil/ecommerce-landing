import React from "react";
import {
  SectionWrapper,
  SectionTitle,
  SectionDescription,
  ImageGrid,
  InstagramImage,
} from "./InstagramSection.Styled";
import Insta1 from '../../assets/insta-1.png';
import Insta2 from '../../assets/insta-2.png';
import Insta3 from '../../assets/insta-3.png';
import Insta4 from '../../assets/insta-4.png';
import Insta5 from '../../assets/insta-5.png';
import Insta6 from '../../assets/insta-6.png';
import Insta7 from '../../assets/insta-7.png';

const images = [
  {
    src: Insta1,
    alt: "Instagram post 1",
  },
  {
    src: Insta2,
    alt: "Instagram post 2",
  },
  {
    src: Insta3,
    alt: "Instagram post 3",
  },
  {
    src: Insta4,
    alt: "Instagram post 4",
  },
  {
    src: Insta5,
    alt: "Instagram post 5",
  },
  {
    src: Insta6,
    alt: "Instagram post 6",
  },
  {
    src: Insta7,
    alt: "Instagram post 7",
  },
];

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
