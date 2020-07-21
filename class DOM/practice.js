//Найдите (получите в переменную) на странице:
//  Все элементы label внутри таблицы. Должно быть 3 элемента.

let label = document.querySelectorAll("table label");

console.log(label);


// Первую ячейку таблицы (со словом "Возраст").
// table.querySelector('td',[name="Возраст"])


// Вторую форму в документе.
// let form2 = document.form.childNodes[1];


// Форму с именем search, без использования её позиции в документе.
// let form = document.form.getElementsByName('search')[0];


//OK    Элемент input в форме с именем search. Если их несколько, то нужен первый.
// let input = document.querySelector('form[name="search"]')
// form.querySelector('input')


// Элемент с именем info[0], без точного знания его позиции в документе.
// let info = document.getElementsByName("info[0]")[0];



// Элемент с именем info[0], внутри формы с именем search-person.
