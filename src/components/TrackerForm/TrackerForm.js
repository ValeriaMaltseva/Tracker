import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { v4 } from 'uuid';

import { trackerActions } from 'redux/actions';
import { COMMAND_START } from 'constants/trackerCommands';
import { ReactComponent as MainPlayIcon } from './img/play_circle_filled.svg';
import './TrackerForm.scss';

const TrackerForm = () => {
  const [trackerName, setTrackerName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const tracker = {
      id: v4(),
      name: `Tracker ${trackerName ? trackerName : moment().format()}`,
      history: [{
        command: COMMAND_START,
        time: Date.now(),
      }],
    };

    dispatch(trackerActions.add(tracker));

    setTrackerName('');
  };

  return (
    <form className="TrackerForm" onSubmit={handleSubmit}>
      <input
        name="name"
        value={trackerName}
        type="text"
        placeholder="Enter tracker name"
        className="TrackerForm__input"
        onChange={(e) => setTrackerName(e.target.value)}
      />
      <button type="submit" className="TrackerForm__btn">
        <MainPlayIcon className="TrackerForm__play-icon" />
      </button>
    </form>
  );
};

export default TrackerForm;
