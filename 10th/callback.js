//* Callback - Any func that passed to another func

function printFirstName(firstName, callback) {
  console.log(firstName);
  callback("Kumar");
}

function printLastName(lastName) {
  console.log(lastName);
}

printFirstName("Ashwani", printLastName);
