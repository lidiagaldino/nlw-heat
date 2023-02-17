import 'dotenv/config'
import express from "express"
import cors from 'cors'

import http from 'http'
import { Server } from 'socket.io'

import routes from './routes/login'
import routesMessage from './routes/message'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

class App {
    public app: express.Application
    public httpServer: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
    public io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>

    public constructor() {
        this.app = express()
        this.httpServer = http.createServer(this.app)

        this.middleware()
        this.routes()
    }

    private middleware() {
        this.app.use(cors())
        this.io = new Server(this.httpServer, {
            cors: {
                origin: "*"
            }
        })
        this.app.use(express.json())
    }

    private routes() {
        this.app.use('/', routes)
        this.app.use('/message', routesMessage)
    }
}

export default new App()