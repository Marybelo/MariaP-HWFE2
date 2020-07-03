//1 - Создайте функцию, которая принимает три числа: два первых должны быть длиной
//  сторон катетов прямоугольного треугольника, а третье – длиной гипотенузы. 
//  Функция возвращает true, если такой прямоугольный треугольник возможен,
//   и false, если нет.


function catet(a, b, c) {
    return c ** 2 == a ** 2 + b ** 2;
}
console.log(catet(5, 12, 13));

//2 - Создайте функцию repeat(str, n), которая возвращает строку, 
// состоящую из n повторений строки str. По умолчанию n=2, str — пустая строка.


let n = Number(prompt('Введите число', '2'));
let str = prompt('Введите текст в строку', );

function repeat(str, n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += str;
    }
    return result
}

let a = repeat(str, n);
console.log(a);




// 3 Создайте функцию, которая принимает два аргумента – количество учеников в классе и 
// количество парт в кабинете. Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».


let children = prompt('количество учеников в классе');
let desk = prompt('количество парт в кабинете');

function checkSeat(children, desk) {
    if (children / 2 == desk) {
        return 'Все сели';
    } else if (children / 2 < desk) {
        return 'Есть свободные места';
    } else if (children / 2 > desk) {
        return 'Мест не хватает';
    } else if (children + 4 == desk) {
        return 'не хватает 2 парт'
    } else if (children - 2 == desk) {
        return '1 лишняя парта'
    }
}
console.log(checkSeat(children, desk));

// 4.Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале. 
// Для ошибочных аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое
//  описание: https://en.wikipedia.org/wiki/Academic_grading_in_Belarus

let j = Number(prompt('Введите оценку', ))

function gradingScale(j) {

    switch (j) {
        case 1:
        case 2:
            return 'Low';
            break;
        case 3:
        case 4:
            return 'Satisfactory';
            break;
        case 5:
        case 6:
            return 'Average';
            break;
        case 7:
        case 8:
            return 'Good';
            break;
        case 9:
        case 10:
            return 'High';
            break;
        default:
            return 'Error';

    }

}

gradingScale(j);


// 5 Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), 
// пока не будет введено число 0.

function numZero() {
    let x;
    do {
        x = +prompt('Введите число');
    } while (x != 0);
}
numZero();


// Провевяет ввели ли число?
let n = NaN;
while (isNaN(n)) {
    n = Number(prompt('Введите число', '2'));
}

// 6 Перепишите функцию из задачи 5 так, чтобы она принимала числа, пока их сумма остаётся меньше 100, 
// выводила эту сумму в консоль, а возвращала количество введённых чисел.


function numSum() {
    let x, i, sum;
    sum = 0;
    i = 0;
    do {
        i++;
        x = Number(prompt(''));
        sum += x;
        console.log(sum);

    } while (sum < 100);
}

console.log.numSum();

// 7. Создайте функцию, которая принимает число в качестве аргумента и проверяет, 
// является ли это число простым.




// 8. Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому номеру месяца. 
// Если месяц с таким номером существует, функция возвращает имя сезона (лето, осень, зима, весна), 
// к которому относится месяц. Если нет –сообщение об ошибке.

// 9. Создайте функцию, которая выводит в консоль числа от 10 до 99, заканчивающиеся на 7 или 
// делящиеся на 7 (в убывающем порядке).



