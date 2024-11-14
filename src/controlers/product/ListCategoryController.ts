import {Request, Response} from 'express'
import { ListCategoryService} from '../../services/product/ListCategoryService'



class ListCategoryController{

    async handle(req: Request, res: Response){
        const category_id =  req.query.category_id as string;

        const listCategoryService =  new ListCategoryService()

        const item = await listCategoryService.execute({
            category_id
        })

        return res.json(item)
    }
   
} 

export {ListCategoryController}


