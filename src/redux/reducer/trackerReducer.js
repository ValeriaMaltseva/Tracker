import { ADD_TRACKER, REMOVE_TRACKER, COMMAND_TRACKER } from '../constants';

const initialState = {
  trackerList: [],
};

const trackerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TRACKER:
      return {
        ...state,
        trackerList: [payload, ...state.trackerList],
      };
    case REMOVE_TRACKER:
      return {
        ...state,
        trackerList: state.trackerList.filter(trackerItem => trackerItem.id !== payload.id)
      };
    case COMMAND_TRACKER:
      const { command, time } = payload;

      return {
        ...state,
        trackerList: state.trackerList.map(tracker => {
          if (tracker.id === payload.id) {
            return { ...tracker, history: [...tracker.history, { command, time }] };
          }

          return tracker;
        })
      };
    default:
      return state;
  }
};

export default trackerReducer;
