import prismaClient from "../../prisma";
import  {compare} from 'bcryptjs'
interface authRequest{
    email:string,
    password: string
}

class AuthRequest{
    async execute ({email,password}:authRequest){
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (!user) {
            throw new Error ("User/password incorrect")
        }

        const passwordMath = await compare(password, user.password)

         if (!passwordMath){
            throw new Error ("User/password incorrect")
         }   

        
        return {ok: true}
        
    }
}

export {AuthRequest}
