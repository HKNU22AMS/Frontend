import React from 'react';
import styled from 'styled-components';

const ImgDiv = styled.div`
  background: lightgray;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  padding-top: 50px;
`;
const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 910px;
  justify-content: center;
  padding: 10px;
`;
const TitleDiv = styled.div`
  font-weight: bold;
  width: 50px;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: 1rem;
`;
const TextDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;
const SpeakersInf = ({ sp }) => {
  return (
    <div style={{ display: 'flex' }}>
      <ImgDiv>
        <img
          alt="발언자 이미지"
          src="/images/user.png"
          width="150"
          height="150"
        />
      </ImgDiv>
      <DetailDiv>
        <TextDiv>
          <TitleDiv>이름</TitleDiv>
          {sp.name}
        </TextDiv>
        <TextDiv>
          <TitleDiv>소속</TitleDiv>
          {sp.affiliation}
        </TextDiv>
      </DetailDiv>
    </div>
  );
};

export default SpeakersInf;
