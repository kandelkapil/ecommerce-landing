import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 157px;
  @media (max-width: 1024px) {
    margin-top: 40px;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
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
  margin-top: 41px;
  max-width: 614px;
  font: 400 16px/26px Poppins, sans-serif;
  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;

export const CategoryTabs = styled.div`
  display: flex;
  margin-top: 53px;
  gap: 20px;
  font-size: 16px;
  color: #8a8a8a;
  font-weight: 400;
  text-align: center;
  line-height: 100%;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    margin-top: 30px;
  }
`;

export const CategoryTab = styled.button`
  font-family: Poppins, sans-serif;
  border-radius: 10px;
  background-color: #fafafa;
  padding: 22px 48px;
  border: none;
  cursor: pointer;
  @media (max-width: 1024px) {
    padding: 15px 20px;
  }
`;

export const ActiveCategoryTab = styled(CategoryTab)`
  box-shadow: 0px 20px 35px 0px rgba(0, 0, 0, 0.15);
  background-color: #000;
  color: #fff;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 65px;
  width: 100%;
  max-width: 1230px;
  padding: 0 20px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  aspect-ratio: 1.37;
  object-fit: contain;
  width: 100%;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h3`
  font: 20px Poppins, sans-serif;
  color: #484848;
`;

export const ProductBrand = styled.span`
  color: #8a8a8a;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  margin-top: 5px;
`;

export const ProductReviews = styled.span`
  font-family: Poppins, sans-serif;
  font-size: 12px;
  color: #484848;
  margin-top: 29px;
`;

export const ProductPrice = styled.span`
  letter-spacing: -0.24px;
  margin-top: 27px;
  font: 24px/83% Poppins, sans-serif;
  color: #484848;
`;

export const ProductStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StatusIndicator = styled.img`
  aspect-ratio: 5;
  object-fit: contain;
  width: 95px;
`;

export const StatusText = styled.span`
  font-family: Poppins, sans-serif;
  font-size: 12px;
  color: #ff4646;
  margin-top: 10px;
`;

export const ViewMoreButton = styled.button`
  border-radius: 10px;
  box-shadow: 0px 20px 35px 0px rgba(0, 0, 0, 0.15);
  background-color: #000;
  margin-top: 86px;
  width: 207px;
  color: #fff;
  text-align: center;
  padding: 22px 60px;
  font: 400 16px/100% Poppins, sans-serif;
  border: none;
  cursor: pointer;
  @media (max-width: 1024px) {
    margin-top: 40px;
    padding: 15px 20px;
  }
`;
