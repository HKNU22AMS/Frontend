import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListPagination from '../common/Pagination';
import { searchStore } from '../../lib/store/searchStore';

const ColumnDiv = styled.div`
  display: flex;
  background: #727e75;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  color: white;
  font-weight: 400;
  text-align: center;
  align-items: center;
  font-size: 20px;
  letter-spacing: -2px;
`;
const ColumnText = styled.div`
  width: ${(props) => props.size || '25%'};
  text-decoration: none;
`;
const MappingDiv = styled.div`
  display: flex;

  height: 600px;
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
  font-size: 1.1rem;
  width: 100%;
  margin-top: 1.3%;
  margin-bottom: 1.3%;
  display: flex;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const TextDiv = styled.div`
  margin-top: 2%;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;
const TotalText = styled.div`
  padding-left: 30px;
  width: 20%;
`;
const DisplayNum = styled.div`
  padding-right: 30px;
  width: 180px;
`;
const StyledSelect = styled.select`
  width: 100px;
  margin-left: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2px;
  font-size: 14px;
`;

const SearchingTemplate = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { posts } = searchStore();

  const offset = (page - 1) * limit;

  return (
    <div style={{ width: '75%' }}>
      <TextDiv>
        <TotalText>검색 결과: {posts ? posts.length : 0}</TotalText>
        <DisplayNum>
          출력 건수
          <StyledSelect
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="10">10개</option>
            <option value="15">15개</option>
            <option value="20">20개</option>
          </StyledSelect>
        </DisplayNum>
      </TextDiv>

      <ColumnDiv>
        <ColumnText size="35%">법안</ColumnText>
        <ColumnText>회의 구분</ColumnText>
        <ColumnText>위원회</ColumnText>
        <ColumnText size="15%">회의 일자</ColumnText>
      </ColumnDiv>
      {posts.length !== 0 ? (
        <MappingDiv>
          {posts.slice(offset, offset + limit).map((bill) => (
            <MappingList key={bill.bill_id}>
              <ColumnText size="35%">
                <StyledLink to={`/bill/${bill.bill_id}`}>
                  {bill.bill_name}
                </StyledLink>
              </ColumnText>
              <ColumnText>{bill.meeting_class}</ColumnText>
              <ColumnText>{bill.committee}</ColumnText>
              <ColumnText size="15%">
                {bill.meeting_date.replace(/-/g, '.')}
              </ColumnText>
            </MappingList>
          ))}
        </MappingDiv>
      ) : (
        <div
          style={{
            width: '96%',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          검색 결과가 없습니다. 다시 검색해주세요.
        </div>
      )}

      <ListPagination
        total={posts.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default SearchingTemplate;
