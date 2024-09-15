//  ES6 module.........



import {a,b,e} from "./01_my_module.js"                    //  module imported using ES6(ecma script).........
                                                    //  have to include ("type": "module",) in the (package.json) file in order to use ES6 module.........

console.log(a,b,e)




import xyz from "./01_my_module.js"                 //  as xyz is a default export module it can be accessed with any name.......

console.log(xyz)




// (function(exports, require, module, __filename, __dirname){              //  Node js automatically provides this IIFE from which we get exports, require, module, __filename and __dirname object variables to use..........
//     //  module code is present here.........
// })








