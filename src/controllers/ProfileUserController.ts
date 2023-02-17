import { Request, Response } from "express"
import ProfileUserService from "../services/ProfileUserService"


class ProfileUserController {
    async handle(req: Request, res: Response) {

        const { user_id } = req

        const result = await ProfileUserService.execute(user_id)
        return res.status(200).json({ message: result })
    }
}

export default new ProfileUserController()