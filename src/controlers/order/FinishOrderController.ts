import { Response,Request } from "express";

import{FinishOrderService} from '../../services/order/FinishOrderService'

class FinishOrderController{
    async handle(res: Response,req: Request){
        const {order_id} = req.body

        const finishOrderService = new  FinishOrderService()

        const order = await finishOrderService.execute({
            order_id
        })

        return res.json(order)
    }
}

export {FinishOrderController}