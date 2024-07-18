import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-self: center;
  width: 85%;
  gap: 20px;
  color: #484848;
  font-weight: 400;
  padding: 15px 0;

  @media (max-width: 1024px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
    overflow: scroll;
  }
`;

export const Logo = styled.h1`
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 52px/100% Volkhov, sans-serif;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const NavItem = styled.a`
  font-family: Poppins, sans-serif;
  margin: auto 0;
  text-decoration: none;
  border-radius: 10px;
  box-shadow: ${({ active }) =>
    active ? "0px 20px 35px 0px rgba(0, 0, 0, 0.15);" : "none"};
  background-color: ${({ active }) => (active ? "#000" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#484848")};
  align-self: stretch;
  text-align: center;
  line-height: 100%;
  justify-content: center;
  padding: 20px 46px;
  white-space: nowrap;

  a {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 375px) {
    padding: 10px;
  }
`;

export const HamburgerIcon = styled.div`
  width: 30px;

  height: 20px;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  cursor: pointer;

  &::before,
  &::after,
  & > span {
    content: "";

    display: block;

    width: 100%;

    height: 2px;

    background-color: #000000;
  }
`;

export const MobileNavWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  a {
    margin: 0;
    padding:10px;
  }
`;

export const CloseIcon = styled.div`
  align-self: flex-end;

  width: 20px;

  height: 20px;

  cursor: pointer;

  position: relative;

  &::before,
  &::after {
    content: "";

    position: absolute;

    width: 100%;

    height: 2px;

    background-color: #000000;

    top: 50%;

    left: 0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
