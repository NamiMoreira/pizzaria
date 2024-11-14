import {Response, Request} from "express"
import { CategoryService } from '../../services/category/CategoryService'

class CategoryController {
   
    async handle( req: Request,res: Response){
        const categoryService = new CategoryService;
        const category = await categoryService.execute()
        
        return res.json(category)
    }
}

export {CategoryController}