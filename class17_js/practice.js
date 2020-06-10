// Напишите функцию, которая получает три числа и возвращает их сумму.


function getSummNumbers(a, b, c) {
    return a + b + c;
}
console.log(getSummNumbers(2, 2, 2));


// Напишите функцию, которая подсчитывает сумму чисел от 1 до заданного X.

function sumOfNumbers() {
    let x = +prompt("Введите число");
    let sum = 0;
    for (i = 1; i <= x; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumOfNumbers())


// Напишите функцию, которая подсчитывает сумму цифр числа.

function sumAllNubers(num) {
    let sum = 0;
    while (num > 0) {
        let x = num % 10;
        sum += x;
        num = (num - x) / 10;
    }
    return sum;
}
console.log(sumAllNubers(2222));


// Напишите функцию, которая считает факториал числа.

function factorial(n) {
    let res = 1;
    for (i = 1; i <= n; i++) {
        res = res * i;
    }
    return res;
}
console.log(factorial(4))