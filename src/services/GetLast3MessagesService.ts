import primsaClient from '../database/prisma'

class GetLast3MessagesService {
    async execute() {
        const messages = await primsaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
            include: {
                user: true
            }
        })

        return messages
    }
}

export default new GetLast3MessagesService()