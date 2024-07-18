import styled from "styled-components";

export const SectionWrapper = styled.section`
  border-radius: 5px;
  box-shadow: 0px 20px 52.289px 0px rgba(68, 68, 68, 0.04);
  background-color: #fff;
  display: flex;
  width: 100%;
  align-items: center;
  color: #484848;
  justify-content: center;
  padding: 75px 0;

  @media (max-width: 1024px) {
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  width: 85%;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  gap: 13px;
`;

export const FeatureIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 50px;
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeatureTitle = styled.h3`
  font: 500 20px Poppins, sans-serif;
`;

export const FeatureDescription = styled.p`
  margin-top: 10px;
  font: 400 16px/162.5% Poppins, sans-serif;
`;
