import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderDiv = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;

  ${({ landing }) => {
    return landing
      ? `justify-content: flex-end;
      align-items: center;
      padding-bottom: 20px;
      height: 130px;
      background: none;
      `
      : `justify-content: center;
      align-items: flex-start;
      height: 60px;
      background: #9BA39C;
      padding-left: 20%;
      padding-bottom: 10px;
      `;
  }}
`;

const LogoText = styled.span`
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  text-decoration-line: underline;
  text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3), -2px 0 white, 0 2px white,
    2px 0 white, 0 -2px white;
  letter-spacing: 2px;
  color: black;
  ${({ landing }) => {
    return landing
      ? `padding-left: 0;
     font-size: 50px;
     `
      : `font-size: 40px;
     `;
  }}
`;

const Logo = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  const [currentPage, setCurrentPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === '/' ? setCurrentPage(true) : setCurrentPage(false);
  }, [location]);

  return (
    <div>
      <HeaderDiv landing={currentPage}>
        <Logo to="/">
          <LogoText landing={currentPage}>AMS</LogoText>
        </Logo>
      </HeaderDiv>
    </div>
  );
};

export default Header;
