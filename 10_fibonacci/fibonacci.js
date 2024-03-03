const fibonacci = function(fib) {
    if(Math.sign(fib) == 1 || Math.sign(fib) == 0) {
        return Math.floor(((((1 + Math.sqrt(5))/2)**fib) - (1 - ((1 + Math.sqrt(5))/2))**fib)/(Math.sqrt(5)))
    }
    else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
