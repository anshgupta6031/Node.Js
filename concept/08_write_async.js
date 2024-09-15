//  Built-in modules.......
//  fs(file system) module.........




const fs = require('node:fs')               //  imported fs module......


//  writing in (07_output.txt)........

//  Asynchronously...........

console.log("Before write.....")

fs.writeFile("07_output.txt", "Ok! I'm back hehehe....", (error) =>{            //  since the writeFile function is asynchronous, a callback has to be given inside it......
    if(error) return console.log(error)
    else console.log("Written Successfully....")
})                                                              //  this function erases the previous data and puts the new passed data in the passed file if it exists. If the file doed not exist, it is created.

console.log("After write.....")






