/// <reference types ="node" />
import * as http from 'http';
import * as fs from 'fs/promises';
import { parseUrl } from './glob'
import { SocketServer } from './socketServer';
function dir(params: { path: string }) {
    if (typeof params.path !== 'string') {
        return Promise.resolve({ files: [] })
    }
    const dir = `./node_modules/${params.path}`
    console.log(params.path)
    const info = fs.readdir(dir);
    return info.then(res => {
        return Promise.all(res.map(item => {
            return fs.lstat(`${dir}/${item}`).then(stat => {
                return {
                    isDirectory: stat.isDirectory(),
                    name: item
                }
            })
        }))

    }).then(files => {
        return { files }
    })
}
function download(params: { path: string }) {
    return fs.readFile( `./node_modules/${params.path}`).then(res => {
        return res
    })

}
const server = http.createServer((request, response) => {
    let address = parseUrl(request.url)
    switch (address.command) {
        case '/dir':
            response.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
            });
            dir(address.params as any).then((res) => {
                response.end(JSON.stringify(res))
            })
            break;
        case '/download':
            response.writeHead(200, {
                'Content-Type': 'application/octet-stream',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
            });
            download(address.params as any).then(res => {
                response.end(res)
            })
            break;
        default:
            response.end(JSON.stringify({}))
    }

}).listen(3000);
new SocketServer(server)



