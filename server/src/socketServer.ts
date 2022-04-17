import { Server } from "http";
import * as WebSocket from "websocket"
export class SocketServer{
    constructor(server:Server){
        const ws = new WebSocket.server({httpServer:server})
        ws.on('request', (request: WebSocket.request)=>{
            const connection = request.accept(undefined, request.origin)
            connection.on("message",(data)=>{
                console.log(data);
                connection.sendUTF("connected")
            })
        })
    }
}