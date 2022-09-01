// task 4 functions -------------------------------------------
// Напишите функцию, которая принимает два числа. 
// Каждую секунду необходимо выводить в консоль, 
// начиная от первого и заканчивая вторым. Используйте setInterval.

function count(n1, n2) {
  return function () {
    if (n1 <= n2) {
      console.log(n1);
      n1 += 1;
    }
    else clearInterval(timerID);
  }
}
const letCount = count(5, 10);
const timerID = setInterval(letCount, 1000);

// Вариант 2

// function count(n1, n2) {
//   const timerID = setInterval(() => {
//     if (n1 <= n2) {
//       console.log(n1);
//       n1 += 1;
//     }
//     else clearInterval(timerID);
//   }, 1000)
// }
// count(5, 15);