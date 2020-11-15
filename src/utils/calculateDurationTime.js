/**
 * Calculate tracker duration time
 *
 * @param tracker
 *
 * @return {*}
 */
const calculateDurationTime = (tracker) => {
  // Array of history states for the tracker
  const { history } = tracker;

  // Return 0 if history is empty or invoke calculate duration time for history array
  return history.length && history.reduce((acc, currentState, index) => {
    const nextState = history[index + 1];
    const isLastState = history.length - 1 === index;

    // Calculate difference from "start" to "pause" command
    if (nextState && nextState.command === 'pause') {
      acc = acc + (nextState.time - currentState.time);
    }

    // Calculate difference for last state if it's a "start" command
    if (isLastState && currentState.command === 'start') {
      acc = acc + (Date.now() - currentState.time);
    }

    return acc;
  }, 0);
};

export default calculateDurationTime;
