import { configDotenv } from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import { AddressInfo } from 'net';
import { env } from 'process';
import { Server } from 'socket.io';
import indexRoute from './routes/indexRoute';

configDotenv()

const app = express()
const server = createServer(app)
const wss = new Server(server)

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public/'))

app.use('/', indexRoute)

server.listen(+env.port!, env.ip!, 0, () => {
    let {address, port} = server.address()! as AddressInfo
    console.log(`Server listened at ${address}:${port}`)
})