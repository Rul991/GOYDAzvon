import { Router } from 'express';

const indexRoute = Router()

indexRoute.get('/', (req, res) => {
    res.render('index', {room: 'Anonim'})
})

export default indexRoute