var userName = prompt('Enter user name');
var secondName = prompt('Enter your second name');
console.log(`Hello, ${userName} ${secondName}!`);


document.querySelector('.header__output-name').innerHTML = userName;
document.querySelector('.header__output-surname').innerHTML = secondName;


let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

const sumNumber = (firstNumber, secondNumber) => {
    return alert(Number(firstNumber) + Number(secondNumber))
}

sumNumber(firstNumber, secondNumber)

