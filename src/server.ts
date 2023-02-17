import app from "./app"
import http from 'http'
import { Server } from 'socket.io'

app.io.on("connection", socket => {
    console.log(`Usuário conectado no socket ${socket.id} `);
})

app.httpServer.listen(3000, () => console.log('App rodando'))