import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Création des composants stylisés
const HeaderContainer = styled.header`
  background-color: #fff;
  height: 68px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0px;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 64px;
  }

  li {
    margin: 0;
    font-size: 24px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

const Logo = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/img/LOGO.webp" alt="Logo" />
      <Nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Apropos">À Propos</Link>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
