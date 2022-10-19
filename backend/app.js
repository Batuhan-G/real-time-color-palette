const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})

let lastColor = '#282c34'

io.on('connection', (socket) => {
    console.log('A user connect!')

    socket.emit('receive', lastColor)

    socket.on('newColor', (color) => {
        console.log(color)

        lastColor = color
        socket.broadcast.emit('receive', color)
    })

    socket.on('disconnect', () => {
        console.log('A user disconnect.');
    })
})

http.listen(3001, () => console.log('Server is up'))