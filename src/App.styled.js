import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 0 29px;
`;

const ContentWrapper = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export { PageWrapper, ContentWrapper };
