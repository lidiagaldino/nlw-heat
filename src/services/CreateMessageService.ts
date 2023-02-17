import primsaClient from '../database/prisma'
import app from '../app'

class CreateMessageService {
    async execute(text: string, user_id: string) {
        const message = await primsaClient.message.create({
            data: {
                text,
                user_id
            },
            include: {
                user: true
            }
        })

        const infoWS = {
            text: message.text,
            user_id: message.user_id,
            created_at: message.created_at,
            user: {
                name: message.user.name,
                avatar_url: message.user.avatar_url
            }
        }

        app.io.emit("New message", infoWS)

        return message
    }
}

export default new CreateMessageService()