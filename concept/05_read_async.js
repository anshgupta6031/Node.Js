//  Built-in modules.......
//  fs(file system) module.........




const fs = require('node:fs')               //  imported fs module......


//  reading from (04_input.txt)........

//  Asynchronously...........

console.log("Before read.....")

fs.readFile("04_input.txt", (error, content) =>{            //  since the readFile function is asynchronous, a callback has to be given inside it......
    if(error) return console.log(error)

    else console.log(content.toString())
})

console.log("After read.....")






