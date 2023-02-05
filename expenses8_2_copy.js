let expenses = [
  {
    yearlyExp: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390],
  },
  {
    yearlyExp: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExp: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

expenses.forEach((exp) => {
  let matches = [];
  exp.yearlyExp.forEach((value, index) => {
    if (value <= 1000) {
      matches.push({ value, index });
    }
  });
  matches.forEach((item) => {
    console.log(
      `Expenses: ${item.value} - ${new Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(new Date(String(item.index + 1)))}`
    );
  });
});
