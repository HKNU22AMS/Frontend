import React from 'react';
import styled from 'styled-components';
import data from '../../data.json';
import { Link } from 'react-router-dom';

const ColumnDiv = styled.div`
  display: flex;
  background: #727e75;
  border-radius: 10px;
  height: 50px;
  color: white;
  font-weight: 400;
  text-align: center;
  align-items: center;
  font-family: 'Roboto';
  font-size: 1.25rem;
`;
const ColumnText = styled.div`
  width: ${(props) => props.size || '25%'};
  text-decoration: none;
`;
const MappingDiv = styled.div`
  font-family: 'Roboto';
  height: 600px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`;
const MappingList = styled.li`
  font-size: 1.1rem;
  width: 100%;
  display: flex;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const SearchingTemplate = () => {
  return (
    <div>
      <ColumnDiv>
        <ColumnText size="35%">법안</ColumnText>
        <ColumnText>회의 구분</ColumnText>
        <ColumnText>위원회</ColumnText>
        <ColumnText size="15%">회의 일자</ColumnText>
      </ColumnDiv>
      <MappingDiv>
        {data.bills.map((bill) => (
          <MappingList key={bill.id}>
            <ColumnText size="35%">
              <StyledLink to="/bill">{bill.name}</StyledLink>
            </ColumnText>
            <ColumnText>{bill.minute_id.meeting_class}</ColumnText>
            <ColumnText>{bill.minute_id.committee}</ColumnText>
            <ColumnText size="15%">{bill.minute_id.meeting_date}</ColumnText>
          </MappingList>
        ))}
      </MappingDiv>
    </div>
  );
};

export default SearchingTemplate;
