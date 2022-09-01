// task 1 functions -------------------------------------------
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, 
// но и, например, знаки, null и так далее.

let arr = [1, 2, 3, 4, 0, "asdf", false, null, 0, 0, 8];
showOddEndEven(arr);
// функция, выводящая количество четных, нечетных и нулевых элементов массива
function showOddEndEven(funcArray) {
  let arrOdd = 0;
  let arrEven = 0;
  let arr0 = 0;
  for (let i = 0; i < funcArray.length; i++) {
    if (typeof funcArray[i] === "number" && funcArray[i] % 2 === 0 && funcArray[i] != 0) {
      arrEven += 1;
    } 
    if (typeof funcArray[i] === "number" && funcArray[i] % 2 != 0 && funcArray[i] != 0) {
      arrOdd += 1;
    } 
    if (funcArray[i] === 0) {
      arr0 += 1; 
    }
  }
  console.log("четных: ", arrEven, " нечетных: ", arrOdd, " нулевых: ", arr0);
}