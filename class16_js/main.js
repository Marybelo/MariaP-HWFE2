//01 задание

let x = prompt("Введите номер квартиры")
if (x < 1 || x > 100) {
    console.log("Такой квартиры нет");
} else if (x >= 1 && x <= 20) {
    console.log("1 Подъезд");
} else if (x >= 21 && x <= 40) {
    console.log("2 Подъезд");
} else if (x >= 41 && x <= 60) {
    console.log("3 Подъезд");
} else if (x >= 61 && x <= 80) {
    console.log("4 Подъезд");
} else {
    console.log("5 Подъезд");
}

//2 задание

let a = prompt("Введите марку авто")
switch (a) {
    case "BMW":
        console.log(a + " – страна происхождения Германия ");
        break;
    case "Mersedec":
        console.log(a + " – страна происхождения Германия ");
        break;
    case "Audi":
        console.log(a + " – страна происхождения Германия ");
        break;
    case "Ford":
        console.log(a + " – страна происхождения Германия ");
        break;
    case "Peugeot":
        console.log(a + " – страна происхождения Франция ");
        break;
    default:
        console.log(a + " - страна происхождения неизвестна");
}

//3 задание Пользователь вводит год. Определите, является ли этот год високосным.

let b = prompt("Введите год");
if (b % 4 == 0 || b % 100 != 0 && b % 400 == 0) {
    console.log(b + "Високосный год");
} else {
    console.log(b + "Обычный год");
}

//4 задание Пользователь вводит число от 1 до 20. Выведите в консоль таблицу умножения этого числа.
//Например, для числа 7:
//7x1=7
//7x2=14
//...
//7x10=70

let num = prompt('Введите число от 1 до 20');
let i = 1;
while (i < = 10) {
    console.log(num + '*' + i + '=' + (num * i); i++)
}

// 5 задание Выведите в консоль сумму всех нечётных чисел от 1 до 50. 
//Дополнительно: решите эту задачу, используя оператор continue.

let totalSumm = 0;

for (let i = 1; i < 50; i++) {
    if (i % 2 == 0) continue; {
        totalSumm += i;
    }
}
console.log(totalSumm);

// 6 Используя циклы, выведите в консоль первые 15
// [чисел Фибоначчи](https://ru.wikipedia.org/wiki/Числа_Фибоначчи).


let first = 0
let second = 1;
let third = 1;
for (let i = 0; i < = 15; i++) {
    third = first + second;
    first = second;
    second = third;
    console.log(third);
}
