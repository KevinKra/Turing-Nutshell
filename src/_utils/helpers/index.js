export const calcRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const inputValidator = (...inputs) => {
  return inputs.every(input => {
    return input !== "";
  });
};

export const setTimer = count => {
  if (count === 0) {
    let timer = 0;
    setInterval(() => {
      timer += 1;
    }, 1000);
    return timer;
  }
};
