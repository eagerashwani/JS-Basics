//* Callback - Any func that passed to another func

function printFirstName(firstName, callback, callback2) {
  console.log(firstName);
  callback("Kumar");
  callback2(24);
}

function printLastName(lastName) {
  console.log(lastName);
}

function printAge(age) {
  console.log(age);
}

printFirstName("Ashwani", printLastName, printAge);

// ! calculator using callback functions

function calculator(add, sub, mul, div) {
  add(2, 3);
  sub(3, 1);
  mul(2, 5);
  div(4, 2);
}
function addition(a, b) {
  console.log(a + b);
}
function subst(a, b) {
  console.log(a - b);
}
function multi(a, b) {
  console.log(a * b);
}
function division(a, b) {
  console.log(a / b);
}
calculator(addition, subst, multi, division);
