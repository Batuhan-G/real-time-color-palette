import io from "socket.io-client"

let socket

export const init = () => {
    console.log("Connecting to the server...");
    socket = io('http://localhost:3001', {
        transports:["websocket"]
    })

    socket.on('connect', () => console.log("Connected successfully to the server"))
}

export const send = (color) => {
    socket.emit("newColor" ,color)
}

export const subscribe = (callback) => {
    socket.on("receive", (color) => {
        console.log(color)
        callback(color)
    })
}