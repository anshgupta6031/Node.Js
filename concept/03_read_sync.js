//  Built-in modules.......
//  fs(file system) module.........




const fs = require('node:fs')               //  imported fs module......


//  reading from (04_input.txt)........

//  Synchronously...........

console.log("Before read.....")

const content = fs.readFileSync("04_input.txt")
console.log(content.toString())                     //  we get the file content in the form of binary buffer which needs to be converted into string in order to understand.

console.log("After read.....")






