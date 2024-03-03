const sumAll = function(arg1, arg2) {
    let x = 0
    if(typeof arg1 == "number" && typeof arg2 == "number" && Math.sign(arg1) == 1 && Math.sign(arg2) == 1) {
        if(arg1 < arg2) {
            for(let i = arg1; i <= arg2; i++) {
                x = x + i
            }
            return x
        }
        else {
            for(let i = arg2; i <= arg1; i++) {
                x = x + i
            }
            return x
        }
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
