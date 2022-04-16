import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  /*position: absolute;
  top: 100%;
  bottom: 0;
  width: 100%;*/
  position: relative;
  height: 135px;
  background: gray;
  padding-top: 20px;
`;

const LogoText = styled.div`
  float: left;
  margin-left: 20%;
  margin-top: 2%;
  font-family: 'ABeeZee';
  font-style: italic;
  font-size: 40px;
  text-decoration-line: underline;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.7);
`;

const CopyText = styled.div`
  float: left;
  margin-left: 4%;
  margin-top: 4%;
  font-family: 'ABeeZee';
  font-size: 14px;
  color: white;
`;

const Footer = () => {
  return (
    <div>
      <FooterDiv>
        <LogoText>AMS</LogoText>
        <CopyText>Copyright Ⓒ 대한민국 국회 도서관, 국회의사당</CopyText>
      </FooterDiv>
    </div>
  );
};

export default Footer;
