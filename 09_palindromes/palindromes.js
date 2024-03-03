const palindromes = function (vstup) {
    list = Array.from(vstup).reverse().join("").replace(/\s|\s+$|!|,|\./gm,'').toLowerCase()
    vstup = vstup.replace(/\s|\s+$|!|,|\./gm, "").toLowerCase()
    if(list == vstup) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
