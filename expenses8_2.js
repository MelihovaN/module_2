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

expenses.forEach((exp) => {  //заходим в первый массив
    let newId = [];  //массив с номерами ID
    exp.yearlyExp.forEach((value) => {   // заходим в массив объектов и проверяем условие
        if (value <= 1000) {
            let idx = exp.yearlyExp.indexOf(value);
            while (idx != -1) {
                newId.push(idx);
                idx = expenses.indexOf(value, idx + 1);
            }
        }
        });
    console.log(newId);  //этот вывод в консоль можно закоментировать, он промежуточный
    
    for (let index = 0; index < newId.length; index++) {
      if (newId[index] === 0) {
        newId[index] = "January";
      }
      if (newId[index] === 1) {
        newId[index] = "February";
      }
      if (newId[index] === 2) {
        newId[index] = "March";
      }
      if (newId[index] === 3) {
        newId[index] = "Aprile";
      }
      if (newId[index] === 4) {
        newId[index] = "May";
      }
      if (newId[index] === 5) {
        newId[index] = "June";
      }
      if (newId[index] === 6) {
        newId[index] = "Juy";
      }
      if (newId[index] === 7) {
        newId[index] = "August";
      }
      if (newId[index] === 8) {
        newId[index] = "September";
      }
      if (newId[index] === 9) {
        newId[index] = "October";
      }
      if (newId[index] === 10) {
        newId[index] = "November";
      }
      if (newId[index] === 11) {
        newId[index] = "December";
      }
    }
    console.log(newId);
    });
