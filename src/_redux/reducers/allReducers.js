export const NGRandomNumber = (state = null, action) => {
  switch (action.type) {
    case "NG_SET_RANDOM_NUMBER":
      return action.payload;
    default:
      return state;
  }
};
