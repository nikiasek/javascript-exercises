const findTheOldest = function(people) {
    let x = []
    y = 0
    let oldestIndex = 0; 
    for(let {yearOfBirth, yearOfDeath} of people) {
        x.push(yearOfDeath - yearOfBirth)
    }
    for(let i = 0; i < x.length; i++) {
        if(x[i] > x[oldestIndex]) {
            oldestIndex = i;
        }
    }
    return people[oldestIndex].name
}
// Do not edit below this line
module.exports = findTheOldest;
