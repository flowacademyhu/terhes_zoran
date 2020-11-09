const osszead = (num1, num2) => {
  return num1 + num2;
};

const szorzas = (num1, num2) => {
  return num1 * num2;
};

const hatvany = (num, hatvany) => {
  let output = 1;
  for (let i = 0; i < hatvany; i++) {
    output *= num;
  }
  return output;
};

module.exports = {
  osszead,
  szorzas,
  hatvany
};
