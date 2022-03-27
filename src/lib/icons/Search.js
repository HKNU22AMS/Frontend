import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const SearchBtn = styled(BiSearch)`
  cursor: pointer;
`;

const Search = ({ size, onClick }) => {
  return <SearchBtn size={size} onClick={onClick} />;
};

export default Search;
