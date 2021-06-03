let year1 = ' год';
let year2 = ' года';
let year3 = ' лет';


let num = +prompt("Введите ваш возраст");

if (isNaN(num) || num < 0) {
   alert("не похоже на возраст")
}
else if (num % 100 >= 11 && num % 100 <= 14 || num % 10 >= 5 && num % 10 <= 9 || num % 10 == 0) {
    alert(num +year3)
}
else if (num % 10 >= 2 && num % 10 <= 4) {
    alert(num + year2)
}
else if (num % 10 == 1) {
    alert(num +year1)
}


