import primsaClient from '../database/prisma'

class ProfileUserService {
    async execute(user_id: string) {
        const user = await primsaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        return user
    }
}

export default new ProfileUserService()