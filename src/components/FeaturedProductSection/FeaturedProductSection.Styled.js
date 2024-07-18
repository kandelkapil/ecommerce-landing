import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  width: 100%;
  margin-top: 150px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const ProductImage = styled.img`
  aspect-ratio: 1.85;
  object-fit: cover;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dadada;
  width: 50%;
  padding: 64px 60px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 40px 0px;
  }
`;

export const ProductCategory = styled.span`
  color: #767676;
  font-family: Poppins, sans-serif;
  font-size: 16px;
`;

export const ProductName = styled.h2`
  color: #484848;
  margin-top: 33px;
  font: 46px Volkhov, sans-serif;

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const ProductDescription = styled.p`
  color: #767676;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  margin-top: 30px;
`;

export const ProductSize = styled.div`
  display: flex;
  margin-top: 22px;
  gap: 17px;
`;

export const SizeLabel = styled.span`
  color: #767676;
  font-family: Poppins, sans-serif;
  font-size: 16px;
`;

export const SizeValue = styled.span`
  font-family: Poppins, sans-serif;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  padding: 9px 20px;
  font-size: 16px;
`;

export const ProductPrice = styled.div`
  color: #000;
  margin-top: 29px;
  font: 500 28px Poppins, sans-serif;
`;

export const BuyNowButton = styled.button`
  font-family: Poppins, sans-serif;
  border-radius: 10px;
  box-shadow: 0px 20px 35px 0px rgba(0, 0, 0, 0.15);
  background-color: #000;
  margin-top: 29px;
  width: 207px;
  color: #fff;
  padding: 21px 60px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 15px 20px;
  }
`;
