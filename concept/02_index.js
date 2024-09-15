

//  I want to call the function defined in my_module.js


const obj = require("./01_my_module")          //  whenever the module is called, the exported functions are accessed as an object....
                                               //  module imported using common js......
console.log(typeof obj)
console.log(obj)

console.log(obj.add(5,7))
console.log(obj.subtract(5,7))
console.log(obj.product(5,7))




