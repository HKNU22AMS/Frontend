import { BiPlus } from 'react-icons/bi';
import styled from 'styled-components';

const PlusBtn = styled(BiPlus)`
  cursor: pointer;
`;

const Plus = ({ size, onClick }) => {
  return <PlusBtn size={size} onClick={onClick} />;
};

export default Plus;
