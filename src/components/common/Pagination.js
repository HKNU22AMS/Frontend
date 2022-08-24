import styled from 'styled-components';
import Pagination from 'react-js-pagination';
import { HiChevronLeft, HiChevronDoubleLeft } from 'react-icons/hi';

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    margin: 0px 10px 0px 10px;
  }
  ul.pagination li a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #9ba39c;
  }
  ul.pagination li.active a {
    font-weight: 600;
    color: #727e75;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    font-weight: 600;
    color: #727e75;
  }
`;

function ListPagination({ total, page, setPage, limit }) {
  return (
    <PaginationBox>
      <Pagination
        totalItemsCount={total}
        activePage={page}
        onChange={setPage}
        itemsCountPerPage={limit}
        pageRangeDisplayed={10}
        prevPageText={<HiChevronLeft size={'20'} />}
        nextPageText={
          <HiChevronLeft size={'20'} style={{ transform: 'rotate(180deg)' }} />
        }
        firstPageText={<HiChevronDoubleLeft />}
        lastPageText={
          <HiChevronDoubleLeft style={{ transform: 'rotate(180deg)' }} />
        }
      ></Pagination>
    </PaginationBox>
  );
}

export default ListPagination;
