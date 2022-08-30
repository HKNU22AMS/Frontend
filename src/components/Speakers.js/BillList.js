import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pagination from '../common/Pagination';

const TitleDiv = styled.div`
  font-weight: bold;
  margin-top: 6%;
  font-size: 1.2rem;
`;
const ListDiv = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
  width: 100%;
  height: 320px;
  //border: 1px solid black;
`;
const ColumnDiv = styled.div`
  display: flex;
  color: white;
  background: #727e75;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  padding-top: 0.25%;
  padding-bottom: 0.25%;
`;
const ColumnText = styled.div`
  //border-bottom: 1px solid black;
  width: ${(props) => props.size || '20%'};
  text-decoration: none;
  font-size: 1.05rem;
  letter-spacing: -0.1rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const MappingDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 15%;
    background-color: #727e75;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const MappingList = styled.li`
  display: flex;
  width: 100%;
  margin-top: 0.3%;
  margin-bottom: 0.3%;
`;

const BillList = ({ bills }) => {
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div>
      <TitleDiv>발언 법안 목록</TitleDiv>
      <ListDiv>
        <ColumnDiv>
          <ColumnText size="8%">번호</ColumnText>
          <ColumnText size="8%">대수</ColumnText>
          <ColumnText>회의구분</ColumnText>
          <ColumnText>위원회</ColumnText>
          <ColumnText size="30%">법안명</ColumnText>
          <ColumnText size="14%">회의 일자</ColumnText>
        </ColumnDiv>

        <MappingDiv>
          {bills &&
            bills.slice(offset, offset + limit).map((bill, index) => (
              <MappingList key={bill.bill_id}>
                <ColumnText size="8%">{index + 1}</ColumnText>
                <ColumnText size="8%">제{bill.assembly_num}대</ColumnText>
                <ColumnText>{bill.meeting_class}</ColumnText>
                <ColumnText>{bill.committee}</ColumnText>
                <ColumnText size="30%">
                  <StyledLink to={`/bill/${bill.bill_id}`}>
                    {bill.bill_name}
                  </StyledLink>
                </ColumnText>
                <ColumnText size="14%">
                  {bill.meeting_date.substr(0, 10).replace(/-/g, '/')}
                </ColumnText>
              </MappingList>
            ))}
        </MappingDiv>
      </ListDiv>
      <Pagination
        total={bills.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default BillList;
