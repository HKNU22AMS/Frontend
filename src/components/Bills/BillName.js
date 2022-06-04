import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  color: black;
  background: none;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 1px 1px 5px silver;
  font-size: 1rem;
  text-align: center;
  height: 30px;
  width: 100px;
  margin-top: 2%;
  padding: 5px;
  :hover {
    background: #727e75;
    color: white;
  }
`;

const BillName = () => {
  let { Billid } = useParams();
  return (
    <div>
      <BackBtn to="/search?">목록으로</BackBtn>
      <NameContainer>법안{Billid}</NameContainer>
    </div>
  );
};

export default BillName;
