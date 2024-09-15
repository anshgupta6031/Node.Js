//  User defined module.....



/*
exports.add = (a, b) =>{            //  using exports keyword makes the function a module. i.e it can now be called from anywhere in the project....
    return a + b
}


exports.subtract = (a, b) =>{
    return a-b
}


exports.product = (a, b) =>{
    return a*b
}

*/



//  same thing done as above.........

let add = (a, b) =>{
    return a+b
}


let subtract = (a, b) =>{
    return a-b
}


let product = (a, b) =>{
    return a*b
}


module.exports = {              //  self made object to be exported.....
    add,                        //  same as (add : add,)........
    subtract,
    product,
}








