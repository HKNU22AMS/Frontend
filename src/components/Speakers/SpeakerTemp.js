import React from 'react';
import BillList from './BillList';
import SpeakersInf from './SpeakersInf';

const SpeakerTemp = ({ sp, bills }) => {
  return (
    <div>
      <SpeakersInf sp={sp} />
      <BillList bills={bills} />
    </div>
  );
};

export default SpeakerTemp;
