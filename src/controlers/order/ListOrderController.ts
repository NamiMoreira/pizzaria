import { Response,Request } from "express";

import{ListOrderService} from '../../services/order/ListOrderService'

class ListOrderController{
    async handle(req: Request, res: Response){
        const listOrderController = new ListOrderService();

        const order = listOrderController.execute();

        return res.json(order)
    }
}

export {ListOrderController}