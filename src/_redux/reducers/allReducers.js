export const NGNumbers = (
  state = { maxRange: "", minRange: "", randomNumber: "" },
  action
) => {
  switch (action.type) {
    case "NG_SET_NUMBERS":
      return action.numbers;
    case "RESET_GAME":
      return { minRange: "", maxRange: "", randomNumber: "" };
    default:
      return state;
  }
};

export const NGChallengerData = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_CHALLENGER_DATA":
      return action.payload;
    case "CLEAR_CHALLENGER_DATA":
      return {};
    case "RESET_GAME":
      return {};
    default:
      return state;
  }
};
