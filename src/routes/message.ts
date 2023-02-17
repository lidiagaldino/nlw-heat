import { Router } from 'express'
import CreateMessageController from '../controllers/CreateMessageController'
import GetLast3MessagesController from '../controllers/GetLast3MessagesController'
import { ensureAuth } from '../middleware/ensureAuth'

const routes = Router()

routes.post('/', ensureAuth, CreateMessageController.handle)
routes.get('/', GetLast3MessagesController.handle)

export default routes
