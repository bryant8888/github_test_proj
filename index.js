var userName = prompt('Enter user name');

var secondName = prompt('Enter your second name');

console.log(`Hello, ${userName} ${secondName}!`);


let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

const sumNumber = (firstNumber, secondNumber) => {
    return alert(Number(firstNumber) + Number(secondNumber))
}

sumNumber(firstNumber, secondNumber)