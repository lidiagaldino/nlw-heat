import { Router } from 'express'
import AuthenticateUserController from '../controllers/AuthenticateUserController'

const routes = Router()

routes.post('/auth', AuthenticateUserController.handle)

routes.get('/github', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

routes.get('/signin/callback', (req, res) => {
    const { code } = req.query

    return res.json(code)
})

export default routes