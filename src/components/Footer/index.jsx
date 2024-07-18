import React from "react";
import {
  FooterWrapper,
  Divider,
  FooterContent,
  FooterLogo,
  FooterLinks,
  FooterLink,
  Copyright,
} from "./Footer.Styled";

const Footer = () => (
  <FooterWrapper>
    <Divider />
    <FooterContent>
      <FooterLogo>FASCO</FooterLogo>
      <FooterLinks>
        <FooterLink href="#">Support Center</FooterLink>
        <FooterLink href="#">Invoicing</FooterLink>
        <FooterLink href="#">Contract</FooterLink>
        <FooterLink href="#">Careers</FooterLink>
        <FooterLink href="#">Blog</FooterLink>
        <FooterLink href="#">FAQ's</FooterLink>
      </FooterLinks>
    </FooterContent>
    <Copyright>Copyright © 2022 FASCO. All Rights Reserved.</Copyright>
  </FooterWrapper>
);

export default Footer;
