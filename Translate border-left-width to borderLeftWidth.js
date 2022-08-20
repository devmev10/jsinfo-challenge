//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//Hint: use split to split the string into an array, transform it and join back.

let str = 'my-short-string'
let a = str.split('-')
//a = [my, short, string]
let b = a.map((element, index) => index == 0? element : element[0].toUpperCase() + element.slice(1))
let c = b.join('')
console.log(c)