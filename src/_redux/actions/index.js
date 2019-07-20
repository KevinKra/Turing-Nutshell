export const setNumbers = numbers => {
  return {
    type: "NG_SET_NUMBERS",
    numbers
  };
};

export const updateGuessCounter = () => {
  return {
    type: "UPDATE_GUESS_COUNTER"
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

export const addNewRound = round => {
  return {
    type: "ADD_NEW_ROUND",
    round
  };
};

export const removeRound = round => {
  return {
    type: "REMOVE_ROUND",
    round
  };
};
