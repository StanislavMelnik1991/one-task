import * as http from 'http';
import * as fs from 'fs/promises';
// const  http = require("http");
//  http.createServer
http.createServer((request, response) => {
    try {
        console.log("Url: " + request.url);
        console.log("Тип запроса: " + request.method);
        console.log("User-Agent: " + request.headers["user-agent"]);
        console.log("Все заголовки");
        console.log(request.headers);
        response.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
        });

        const dir = `./node_modules/${request.url}`
        const info = fs.readdir(dir);
        info.then(res => {
            Promise.all(res.map(item => {
                return fs.lstat(`${dir}/${item}`).then(stat => {
                    return {
                        isDirectory: stat.isDirectory(),
                        name: item
                    }
                })
            })).then(files => {
                response.end(JSON.stringify({ files }))
            })


        });
    }
    catch {

        response.end({ files: [] })
    }

}).listen(3000);



