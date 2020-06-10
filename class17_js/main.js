// 1. Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.


function minNum(a, b, c) {

    if (a < b && a < c) {
        return a;
    }
    if (b < a && b < c) {
        return b;
    }
    return c
}
console.log("Первое мин", minNum(1, 2, 3));
console.log("Второе мин", minNum(2, 1, 3));
console.log("Третье мин", minNum(3, 2, 1));


// 2. Создайте функцию, которая получает в качестве аргументов значения суток, 
// часов и минут, а возвращает соответствующее им количество секунд.


function time(days, hours, minutes) {
    return days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60;
}

console.log(time(1, 0, 0));


let time = function (days, hours, minutes) {
    return days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60;
}

console.log(time(1, 0, 0));


let time = (days, hours, minutes) =>
    days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60;

console.log(time(1, 0, 0));


// let squareNum = a => a * a;

// function squareNum(a) {
//     return a * a
// }


// 3. Напишите рекурсивную функцию для подсчёта факториала числа.


function fac(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res = res * i;
    }
    return res;
}
console.log(fac(4));


// 4. Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд. 
// Например, если на вход функция получает 1234, вернуть она должна 4321.


function getReverse(num) {
    if (num < 10) {
        return num;
    }
    let x = num % 10;
    num = (num - x) / 10;
    for (let i = num; i >= 1; i /= 10) {
        x *= 10;
    }
    return x + getReverse(num);
}
console.log(getReverse(123456));

// 5. Напишите функцию для решения квадратных уравнений.
//  В качестве параметров она должна принимать коэффиценты a, b и c, возвращать – количество корней. 
// Сами корни уравнения (или информацию о их отсутствии) функция должна выводить в консоль.