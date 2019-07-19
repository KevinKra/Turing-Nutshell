export const NGRandomNumber = (state = null, action) => {
  switch (action.type) {
    case "NG_SET_RANDOM_NUMBER":
      return action.number;
    default:
      return state;
  }
};
