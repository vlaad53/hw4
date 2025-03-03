let f1 = "Привіт";
let f2 = "Світ";

if (f1 !== "" && f2 !== "") {
    console.log("обидва поля заповнені");
} else {
    console.log("не всі поля заповнені"); 
}


let number1 = 5;
let number2 = 7;
let sum = number1 + number2;

if (sum > 10) {
    console.log("cума більша за 10");
} else {
    console.log("cума менша або дорівнює 10");
}


let text = "я вчю JavaScript";

if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}


let number = 15;

if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}


let name = "Влад";
let email = "vlad@gmail.com";
let password = "12345678";

if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}