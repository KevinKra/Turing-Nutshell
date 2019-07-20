export const calcRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const inputValidator = (...inputs) => {
  return inputs.every(input => {
    return input !== "";
  });
};
