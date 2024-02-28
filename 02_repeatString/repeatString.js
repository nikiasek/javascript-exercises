const repeatString = function(word, count) {
    hovinko = ""
    if(Math.sign(count) == 1) {
        for(i = 0; i < count; i++) {
            hovinko += word
        }
        return hovinko
    }else if(Math.sign(count) == 0) {
        return ""
    }else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
