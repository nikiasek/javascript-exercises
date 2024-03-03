const add = function(arg1, arg2) {
	return arg1 + arg2
};

const subtract = function(arg1, arg2) {
	return arg1 - arg2
};

const sum = function(arg) {
  let x = 0
	for(let i = 0; i < arg.length; i++) {
    x = x + arg[i]
  }
  return x
};

const multiply = function(arg) {
  let x = 1
	for(let i = 0; i < arg.length; i++) {
    x = x * arg[i]
  }
  return x
};

const power = function(num, power) {
	return num ** power
};

const factorial = function(arg) {
  let x = 1
	for(let i = 1; i <= arg; i++) {
    x = x * i
  }
  return x
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
