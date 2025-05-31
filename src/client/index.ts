import { connect } from 'socket.io-client';

const io = connect()

io.on('connection', (data: any) => {
    console.log(data)
})