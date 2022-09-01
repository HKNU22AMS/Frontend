import { FiCalendar } from 'react-icons/fi';
import styled from 'styled-components';

const CalendarBtn = styled(FiCalendar)`
  //cursor: pointer;
  margin-left: 5px;
`;

const Calendar = ({ size, onClick }) => {
  return <CalendarBtn size={size} onClick={onClick} />;
};

export default Calendar;
