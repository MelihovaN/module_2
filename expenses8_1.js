let expenses = [
  {
    yearlyExp: [2500, 2600, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390],
  },
  {
    yearlyExp: [500, 1000, 90000, 80, 980, 10, 400, 3000, 250, 45000, 1200],
  },
  {
    yearlyExp: [20, 200, 8900, 3300, 2300, 1009, 2000, 670, 900, 900, 7000],
  },
];

expenses.forEach((exp) => {
  let sum = 0;
  exp.yearlyExp.forEach((value) => {
    if (value > 1000) {
      sum += value;
    }
  });
  console.log(`Yearly expenses are : ${sum}`);

  function test() {
    if (sum === 37190 || sum === 139200 || sum === 24509) {
      console.log("true");
    }
  }
  test();
});
