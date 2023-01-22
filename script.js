console.log("Hi, JS student!");
console.log("Hi, JS student!");
console.log("Hi, JS student!");

let userName, anortherNmae, moreName;

userName = "Oksana";
anortherName = "Ivan";
// anortherName = userName;

//some text

console.log(userName);
console.log(anortherName);

const BIRTH_DAY = "10.10.1960";
// BIRTH_DAY = "12.12.1970" //not possible

console.log(BIRTH_DAY);

var message;
message = "New message text";

console.log(message);

let balance = 100;
let penalty = balance < 0 ? 50 : 0;
console.log(penalty);

const INCOME = [1000, 2000, 4500, 3020];
INCOME.push(1900);
console.log(INCOME);

let newName = "oksana";
let surname = "Melihova";
let fullName = newName + " " + surname;
console.log(`This is my full name :${fullName} \u23E9.`);

let nameLength = newName.length;
let index = 5;
console.log(`The symbol for ${index} position is ${newName.charAt(index)}`);
console.log(`Length of the name is ${nameLength}`);

console.log(newName.toLocaleLowerCase());
console.log(newName.slice(2));
