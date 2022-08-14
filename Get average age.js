let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];
function getAverageAge(users){
    let total = users.reduce((avg, current) => avg + current.age, 0)
    let result = total / users.length
    return result
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28