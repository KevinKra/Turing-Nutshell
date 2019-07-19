export const setNumbers = numbers => {
  return {
    type: "NG_SET_NUMBERS",
    numbers
  };
};

export const updateChallengerData = data => {
  return {
    type: "UPDATE_CHALLENGER_DATA",
    payload: data
  };
};

export const clearChallengerData = () => {
  return {
    type: "CLEAR_CHALLENGER_DATA"
  };
};

export const resetGame = () => {
  return {
    type: "RESET_GAME"
  };
};
