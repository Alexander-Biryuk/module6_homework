// task 3 functions -------------------------------------------
// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.

function myFunc(n1) {
  return function (n2) {
    return n1 + n2;
  }  
}
const getSum = myFunc(5);
console.log(getSum(4));