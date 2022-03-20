import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: gray;
  padding-top: 2%;
`;

const LogoText = styled.span`
  margin-left: 20%;
  font-family: 'ABeeZee';
  font-style: italic;
  font-size: 40px;
  text-decoration-line: underline;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.7);
`;

const CopyText = styled.span`
  margin-left: 2%;
  font-family: 'ABeeZee';
  font-size: 14px;
  color: white;
`;

const Header = () => {
  return (
    <div>
      <FooterDiv>
        <LogoText>AMS</LogoText>
        <CopyText>Copyright Ⓒ 대한민국 국회 도서관, 국회의사당</CopyText>
      </FooterDiv>
    </div>
  );
};

export default Header;
