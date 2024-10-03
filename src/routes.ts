import {Router }  from "express";

import {CreateUserController} from './controlers/user/CreateUserController';
import{AuthUserController} from './controlers/user/AuthController'


const router = Router();

router.post('/users', new CreateUserController().handle )
router.post('/session', new AuthUserController().handle)

export {router};
