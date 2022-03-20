import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderDiv = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
  background: none;
  padding-bottom: 20px;

  ${({ landing }) => {
    return landing
      ? `justify-content: flex-end;
      align-items: center;`
      : `justify-content: center;
      align-items: flex-start`;
  }}
`;

const LogoText = styled.span`
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 40px;
  text-decoration-line: underline;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -1px 0 white, 0 1px white,
    1px 0 white, 0 -1px white;
  letter-spacing: 2px;
  color: black;
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
          <LogoText>AMS</LogoText>
        </Logo>
      </HeaderDiv>
    </div>
  );
};

export default Header;
