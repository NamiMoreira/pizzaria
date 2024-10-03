import { Request, Response } from "express";

import { AuthRequest }from '../../services/user/AuthUserService'
    
class AuthUserController{
    async handle(req: Request, res: Response){
    
        const {email,password} = req.body;

        const authUserService = new AuthRequest();

        const auth = await authUserService.execute({
            email,
            password
        }
        
        )
        return res.json(auth)
    }
}
export {AuthUserController}