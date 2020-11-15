import React from 'react';

import Tracker from 'components/Tracker';
import './TrackerList.scss';

const TrackerList = ({ trackerList }) => {
  return (
    <div className="TrackerList">
      {trackerList.map(tracker => <Tracker key={tracker.id} tracker={tracker} />)}
    </div>
  );
};

export default TrackerList;
