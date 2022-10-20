import React, { useEffect, useState } from 'react';
import BillGraphs from './BillGraphs';
import BillName from './BillName';
import BillSpeaker from './BillSpeaker';

const BillTemplate = ({ billInfo, sp }) => {
  const [TopList, setTL] = useState([]);

  useEffect(() => {
    setTL(billInfo.main_content && billInfo.main_content.split(','));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billInfo]);
  return (
    <>
      {billInfo && sp && TopList && (
        <div>
          <BillName billInfo={billInfo} />
          <BillGraphs TopList={TopList} sp={sp} />
          <BillSpeaker billInfo={billInfo} sp={sp} />
        </div>
      )}
    </>
  );
};

export default BillTemplate;
