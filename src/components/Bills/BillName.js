import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';

const NameContainer = styled.div`
  //margin-top: 3%;
  margin-top: 1%;
  margin-bottom: 3%;
  padding: 0.5%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  //border-radius: 20px;
  background: none;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;
const BackBtn = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  background: none;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 1px 1px 5px silver;
  font-size: 1rem;
  height: 30px;
  width: 90px;
  margin: 1.5% 0 1.5% 0;
  padding: 5px 10px 5px 10px;
  :hover {
    background: #727e75;
    color: white;
  }
`;

const BillName = ({ billInfo }) => {
  return (
    <div>
      <BackBtn to="/search?">
        <IoIosArrowBack size="20" />
        목록으로
      </BackBtn>
      <NameContainer>{billInfo.name}</NameContainer>
    </div>
  );
};

export default BillName;
