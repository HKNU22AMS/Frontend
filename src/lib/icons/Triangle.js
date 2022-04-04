import { VscTriangleDown } from 'react-icons/vsc';
import styled from 'styled-components';

const TriangleBtn = styled(VscTriangleDown)`
  cursor: pointer;
  /*padding-right: ${(props) => (props.upsidedown ? '10px' : '')};
  padding-left: ${(props) => (props.upsidedown ? '' : '10px')};
  transfor: ${(props) => (props.upsidedown ? '' : 'rotate(180deg)')};*/

  ${(props) =>
    props.upsidedown === 'false'
      ? `padding-right: 10px;`
      : `padding-left: 10px;
        transform: rotate(180deg);`}
`;

const Triangle = ({ size, onClick, upsidedown }) => {
  return <TriangleBtn size={size} upsidedown={upsidedown} onClick={onClick} />;
};

export default Triangle;
