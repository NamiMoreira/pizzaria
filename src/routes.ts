import {Router }  from "express";
import multer from "multer";

import {CreateUserController} from './controlers/user/CreateUserController';
import {AuthUserController} from './controlers/user/AuthController'
import { DetailUserController } from "./controlers/user/DetailUserController";
import { isAuthenticated} from'./middlewares/isAuthenticated'
import { CreatedCategoryController } from './controlers/category/CreatedCategoryController'
import { CategoryController }  from './controlers/category/CategoryController'
import {CreateProductController} from './controlers/product/CreateProductController'
import { ListCategoryController } from "./controlers/product/ListCategoryController";
import { CreateOrderController } from "./controlers/order/CreateOrderController";
import {RemoveOrderController} from "./controlers/order/RemoveOrderController"
import {AddItemController} from "./controlers/order/AddItemController"
import {RemoveItemConstroller} from "./controlers/order/RemoveItemController"
import{SendOrderController}from "./controlers/order/SendOrderController"
import {ListOrderController} from "./controlers/order/ListOrderController"
import {FinishOrderController} from "./controlers/order/FinishOrderController"


import uploadConfig from "./config/multer";


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//user
router.post('/users', new CreateUserController().handle )
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//categories
router.post('/category',isAuthenticated, new CreatedCategoryController().handle)
router.get('/category', new CategoryController().handle )

//product
router.post('/product',isAuthenticated,upload.single('file') ,new CreateProductController().handle)
router.get('/category/product',new ListCategoryController().handle)

//order
router.post('/order',isAuthenticated, new CreateOrderController().handle)
router.delete('/order',isAuthenticated,new RemoveOrderController().handle)
router.post('/order/add',isAuthenticated,new AddItemController().handle)
router.delete('/order/item',isAuthenticated,new RemoveItemConstroller().handle)
router.put('/order/send',isAuthenticated, new SendOrderController().handle)
router.get('/order',isAuthenticated, new ListOrderController().handle)
router.get('/order/detail',isAuthenticated,new ListOrderController().handle)
router.post('/order/finish',isAuthenticated,new FinishOrderController().handle)

export {router};
 

