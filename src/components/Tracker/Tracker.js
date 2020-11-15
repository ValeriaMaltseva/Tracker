import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { trackerActions } from 'redux/actions';
import calculateDurationTime from 'utils/calculateDurationTime';
import { ReactComponent as PlayIcon } from './img/play_circle_outline.svg';
import { ReactComponent as PauseIcon } from './img/pause_circle.svg';
import { ReactComponent as RemoveIcon } from './img/remove_circle.svg';
import './Tracker.scss';

const Tracker = ({ tracker }) => {
  const dispatch = useDispatch();

  const [, setTick] = useState(0);

  const lastState = tracker.history[tracker.history.length - 1];
  const state = lastState && lastState.command === 'start' ? 'started' : 'stopped';

  const timerRef = useRef(null);

  useEffect(() => {
    if (state === 'started') {
      timerRef.current = setInterval(() => {
        setTick(tick => tick + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [state]);

  const duration = calculateDurationTime(tracker);

  return (
    <div className="Tracker">
      <div className="Tracker__title">{tracker.name}</div>
      <div className="Tracker__description">
        <div className="Tracker__time">
          {moment.duration(duration, 'milliseconds').format('hh:mm:ss', { trim: false })}
        </div>
        <div className="Tracker__controls">
          {state === 'stopped'
            ? <PlayIcon onClick={() => dispatch(trackerActions.start(tracker.id))} className="Tracker__control" />
            : <PauseIcon onClick={() => dispatch(trackerActions.pause(tracker.id))} className="Tracker__control" />
          }

          <RemoveIcon
            className="Tracker__control"
            onClick={() => dispatch(trackerActions.remove(tracker.id))}
          />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
