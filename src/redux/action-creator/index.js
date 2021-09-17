export const startTime = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "START",
      payload,
    });
  };
};

export const pauseTime = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "PAUSE",
      payload,
    });
  };
};

export const resetTime = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "RESET",
      payload,
    });
  };
};

export const completedTime = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "DONE",
      payload,
    });
  };
};
