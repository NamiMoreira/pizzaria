import prismaClient from "../../prisma";
import  {compare} from 'bcryptjs'
import{sign} from 'jsonwebtoken'
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
        
         const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
            subject: user.id,
            expiresIn: '30d'
            }

         )
        
        return {
            id:user.id,
            name: user.name,
            token: token
        }
        
    }
}

export {AuthRequest}
