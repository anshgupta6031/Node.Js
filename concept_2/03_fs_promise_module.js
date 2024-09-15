



import fs from "fs/promises"                            //  another built in fs module which uses promises to avoid callback hell which was caused by the simple fs module.......


let a = await fs.writeFile("04_xyz.txt", "Hello Ansh...")

let b = await fs.readFile("04_xyz.txt")

console.log(b.toString())









