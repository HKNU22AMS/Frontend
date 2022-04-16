import React from 'react';
import styled from 'styled-components';
import LandingTemplate from '../../components/Landing/LandingTemplate';

// 배경이미지
const StyledBg = styled.div`
  position: absolute;
  width: 100%;
  height: 1080px;
  left: 0px;
  top: 0px;
  z-index: -1;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.2)
    ),
    url(/images/background.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const LandingForm = () => {
  return (
    <div style={{ paddingBottom: '140px' }}>
      <StyledBg />
      <LandingTemplate />
    </div>
  );
};

export default LandingForm;
