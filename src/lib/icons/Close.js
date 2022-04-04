import { IoCloseCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

const CloseBtn = styled(IoCloseCircleOutline)`
  cursor: pointer;
  right: 0;
`;

const Close = ({ size, onClick }) => {
  return <CloseBtn size={size} onClick={onClick} />;
};

export default Close;
