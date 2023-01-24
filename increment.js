/*Это унарные операции, которые увеличивают и уменьшают на единицу число, записанное в переменную.
существует две формы- префиксная ++x, --x и постфиксная. 
При использовании префиксной нотации сначала происходит изменение переменной, 
а потом возврат.
При использовании постфиксной нотации — наоборот: можно считать, что сначала происходит возврат, а потом изменение переменной.
Правило работает одинаково для инкремента и декремента.
*/

function increment(x) { //так как ++ стоит до  'x, то сначла число увеличивается, потом выводится ответ
  return (x = ++x);
}
console.log(increment(20));
console.log(increment(14));

function decrement(y) {
  return (y = --y);
}
console.log(decrement(12));
console.log(decrement(7));

function calculation(a, b) {
  return {
    valueOne: (a = ++a),
    valueTwo: (b = b++), //в данном случае выводимое число не увеличится, так как сначла ответ выводится, потом увеличивается.
  };
}
console.log(calculation(5, 10));
console.log(calculation(23, 15));
