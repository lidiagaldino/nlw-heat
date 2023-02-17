import { Request, Response } from "express"
import GetLast3MessagesService from "../services/GetLast3MessagesService"


class GetLast3MessagesController {
    async handle(req: Request, res: Response) {

        const result = await GetLast3MessagesService.execute()
        console.log(result);

        return res.status(200).json({ message: result })

    }
}

export default new GetLast3MessagesController()