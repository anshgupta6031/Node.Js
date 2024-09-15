//  Built-in modules.......
//  HTTP module.........

//  self made server using http module which takes a callback containing request and response objects....



const http = require('node:http')               //  imported http module.......


const server = http.createServer((request, response) =>{        //  the request object comes from the client, and the response object is generated by the server...
    if(request.url == "/hello") response.end("Hello!, welcome to learning Node.js")         //  If we search (localhost:3000/hello) in chrome browser after running the code, then this response will be generated by the server and will be sent to the browser....

    else{
        response.writeHead(404)
        response.end("Use the correct URL.")
    }
})


server.listen(3000, () =>{                          //   turning on the server....     //  here, 3000 is the port number.......
    console.log("Server got started.......")
})

//  use (ctrl + c) to stop the server from the terminal after running the code....




