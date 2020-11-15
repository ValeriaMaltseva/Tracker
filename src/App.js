import React from 'react';
import { useSelector } from 'react-redux';

import TrackerForm from 'components/TrackerForm';
import TrackerList from 'components/TrackerList';
import './App.scss';

const App = React.memo(() => {
  const { trackerList } = useSelector(state => state.trackerList);

  return (
    <div className="App">
      <div className="App__title">tracker</div>
      <div className="App__inner">
        <TrackerForm />
        <TrackerList trackerList={trackerList} />
      </div>
    </div>
  );
});

export default App;
