function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}
var greeting = getGreeting('World');
console.log('greeting', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplySum = addAndMultiplyBy5(10, 5);
console.log('math', addAndMultiplySum);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideSum = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideSum', multiplyAndDivideSum);

function subtractTwonumbers(num1, num2) {
  return num1 - num2;
}
var subtractSum = subtractTwonumbers(22, 7);
console.log('subtractSum', subtractSum);

function getCircleCircumference(radius) {
  return (radius * 2) * Math.PI;
}
var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName', fullName);

function cube(number) {
  return Math.pow(number, 3);
}
var cubeSum = cube(5);
console.log('cubeSum', cubeSum);
