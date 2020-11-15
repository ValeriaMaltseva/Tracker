import React from 'react';
import { useSelector } from 'react-redux';

import Tracker from 'components/Tracker';
import './TrackerList.scss';

const TrackerList = () => {
  const { trackerList } = useSelector(state => state.trackerList);

  return (
    <div className="TrackerList">
      {trackerList.map(tracker => <Tracker key={tracker.id} tracker={tracker} />)}
    </div>
  );
};

export default TrackerList;
