import { ADD_TRACKER, REMOVE_TRACKER, COMMAND_TRACKER } from '../constants';

const add = (payload) => ({
  type: ADD_TRACKER,
  payload,
});

const remove = (id) => ({
  type: REMOVE_TRACKER,
  payload: { id },
});

const start = (id) => ({
  type: COMMAND_TRACKER,
  payload: {
    id,
    command: 'start',
    time: Date.now(),
  },
});

const pause = (id) => ({
  type: COMMAND_TRACKER,
  payload: {
    id,
    command: 'pause',
    time: Date.now(),
  },
});

const actions = {
  add,
  remove,
  start,
  pause,
};

export default actions;
