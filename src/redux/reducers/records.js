const records = (state = [], action) => {
  switch (action.type) {
    case "START": {
      const { payload } = action;
      return [
        ...state,
        {
          startTime: payload.startTime,
        },
      ];
    }

    case "PAUSE": {
      const { payload } = action;
      return [
        ...state,
        {
          pauseTime: payload.pauseTime,
        },
      ];
    }
    case "RESET":
    case "DONE": {
    }
    default:
      return state;
  }
};

export default records;
// start_timeText
// duration
// pause_count
