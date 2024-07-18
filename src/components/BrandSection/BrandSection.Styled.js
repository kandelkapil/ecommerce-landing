import styled from "styled-components";

export const BrandWrapper = styled.section`
  border-radius: 5px;
  box-shadow: 0px 20px 52.289px 0px rgba(68, 68, 68, 0.04);
  background-color: #fff;
  align-self: center;
  display: flex;
  margin-top: 27px;
  width: 85%;
  align-items: center;
  justify-content: center;
  padding: 80px 0px;
  overflow: hidden;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    max-width: 100%;
    justify-content: center;
    padding: 40px 20px;
  }
`;

export const BrandLogo = styled.img`
  object-fit: contain;
  object-position: center;
  width: 196px;
  max-width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    width: calc(50% - 20px);
  }
`;
