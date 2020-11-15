import React from 'react';

import TrackerForm from 'components/TrackerForm';
import TrackerList from 'components/TrackerList';
import './App.scss';

const App = React.memo(() => {
  return (
    <div className="App">
      <div className="App__title">tracker</div>
      <div className="App__inner">
        <TrackerForm />
        <TrackerList />
      </div>
    </div>
  );
});

export default App;
