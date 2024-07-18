import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 49px;
  width: 100%;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #dedfe1;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  margin-top: 33px;
  width: 85%;
  gap: 20px;
  color: #484848;
  padding: 0 20px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const FooterLogo = styled.h2`
  flex-grow: 1;
  font: 32px/100% Volkhov, sans-serif;
`;

export const FooterLinks = styled.nav`
  display: flex;
  margin-top: 7px;
  gap: 20px;
  font-size: 16px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const FooterLink = styled.a`
  font-family: Poppins, sans-serif;
  color: #484848;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Copyright = styled.p`
  color: #484848;
  text-align: center;
  margin-top: 63px;
  font: 400 12px/217% Poppins, sans-serif;

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;
