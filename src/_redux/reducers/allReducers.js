export const NGNumbers = (
  state = { maxRange: "", minRange: "", randomNumber: "", guess: 0 },
  action
) => {
  switch (action.type) {
    case "NG_SET_NUMBERS":
      return action.numbers;
    case "UPDATE_GUESS_COUNTER":
      const updateGuess = () => {
        const stateCopy = { ...state };
        stateCopy.guess++;
        return stateCopy;
      };
      return updateGuess();
    case "RESET_GAME":
      return { minRange: "", maxRange: "", randomNumber: "", guess: 0 };
    default:
      return state;
  }
};

export const NGChallengerData = (
  state = {
    challengerOneName: "",
    challengerTwoName: "",
    challengerOneGuess: "",
    challengerTwoGuess: ""
  },
  action
) => {
  switch (action.type) {
    case "UPDATE_CHALLENGER_DATA":
      return action.payload;
    case "CLEAR_CHALLENGER_DATA":
      return {
        challengerOneName: "",
        challengerTwoName: "",
        challengerOneGuess: "",
        challengerTwoGuess: ""
      };
    case "RESET_GAME" || "CLEAR_GAME":
      return {
        challengerOneName: "",
        challengerTwoName: "",
        challengerOneGuess: "",
        challengerTwoGuess: ""
      };
    default:
      return state;
  }
};

export const NGRoundData = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_ROUND":
      return [...state, action.round];
    case "REMOVE_ROUND":
      return state.filter(round => round.id !== action.id);
    case "RESET_GAME":
      return [];
    case "CLEAR_GAME":
      return state;
    default:
      return state;
  }
};
