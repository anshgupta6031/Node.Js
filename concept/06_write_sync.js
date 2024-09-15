//  Built-in modules.......
//  fs(file system) module.........




const fs = require('node:fs')               //  imported fs module......


//  writing in (07_output.txt)........

//  Synchronously...........

console.log("Before write.....")

fs.writeFileSync("07_output.txt", "This is the text I want to write in the file.....")          //  this function erases the previous data and puts the new passed data in the passed file if it exists. If the file doed not exist, it is created.

console.log("After write.....")






