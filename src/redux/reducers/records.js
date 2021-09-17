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

    case "PAUSE":
    case "RESET":
    case "DONE":
    default:
      return state;
  }
};

export default records;
// start_timeText
// duration
// pause_count
