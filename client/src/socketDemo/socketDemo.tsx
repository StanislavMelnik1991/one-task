import React, { useEffect, useState } from "react"

export function SocketDemo (){
    useEffect(()=>{
        const socket = new WebSocket('ws://127.0.0.1:3000');
        socket.onopen = (ev)=>{
            socket.send('open')
            socket.onmessage = (e)=>{
                console.log(e.data)
            }
        }
    }, [])
    return <div>
        
    </div>
}