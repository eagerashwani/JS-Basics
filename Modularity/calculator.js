function add(a, b) {
  console.log("The sum is ", a + b);
}
function sub(a, b) {
  console.log("The Diff is ", a - b);
}

function mul(a, b) {
  console.log("The product is ", a * b);
}

function divide(a, b) {
  console.log("The Quotient is ", a / b);
}

// add(2, 4);
// sub(5, 1);
// mul(5, 4);
// divide(7, 5);


module.exports = {
    Addition : add,
    Substract : sub,
    Multiply : mul,
    Division : divide
}
