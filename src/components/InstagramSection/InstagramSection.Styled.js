import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 157px;

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

export const SectionTitle = styled.h2`
  color: #484848;
  text-align: center;
  font: 400 46px Volkhov, sans-serif;

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const SectionDescription = styled.p`
  color: #8a8a8a;
  text-align: center;
  margin-top: 29px;
  max-width: 614px;
  font: 400 16px/26px Poppins, sans-serif;
`;

export const ImageGrid = styled.div`
  display: flex;
  margin-top: 103px;
  align-items: center;
  gap: 0;
  overflow-x: auto;
  width: 100%;
  max-width: 100%;

  @media (max-width: 1024px) {
    flex-wrap: nowrap;
    margin-top: 40px;
  }
`;

export const InstagramImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: ${({ index, array }) =>
    index === 0 || index === array.length - 1 ? "320px" : "256px"};
  height: 308px;
  flex-shrink: 0;
`;
