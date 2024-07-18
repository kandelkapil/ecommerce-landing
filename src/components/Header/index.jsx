import React, { useState, useEffect } from "react";

import {
  HeaderWrapper,
  Logo,
  NavWrapper,
  NavItem,
  HeaderContainer,
  HamburgerIcon,
  MobileNavWrapper,
  CloseIcon,
} from "./Header.Styled";

import { Link } from "react-scroll";

const navItems = [
  { name: "Home", route: "#home", id: "home" },
  { name: "Deals", route: "#deals", id: "deals" },
  { name: "New Arrivals", route: "#new-arrivals", id: "new-arrivals" },
  { name: "Packages", route: "#packages", id: "packages" },
  { name: "Sign in", route: "#sign-in", id: "sign-in" },
  { name: "Sign up", route: "#sign-up", id: "sign-up" },
];

const Header = () => {
  const [active, setActive] = useState(navItems[0].route);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (item) => {
    setActive(item.route);

    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo onClick={() => handleButtonClick(navItems[0])}>FASCO</Logo>

        {isMobile ? (
          <>
            <HamburgerIcon onClick={toggleMobileMenu} />

            {isMobileMenuOpen && (
              <MobileNavWrapper>
                <CloseIcon onClick={toggleMobileMenu} />

                {navItems.map((item) => (
                  <NavItem key={item.name} active={item.route === active}>
                    <Link
                      to={item.id}
                      smooth={true}
                      duration={2000}
                      onClick={() => handleButtonClick(item)}
                    >
                      {item.name}
                    </Link>
                  </NavItem>
                ))}
              </MobileNavWrapper>
            )}
          </>
        ) : (
          <NavWrapper>
            {navItems.map((item) => (
              <NavItem key={item.name} active={item.route === active}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={2000}
                  onClick={() => handleButtonClick(item)}
                >
                  {item.name}
                </Link>
              </NavItem>
            ))}
          </NavWrapper>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
