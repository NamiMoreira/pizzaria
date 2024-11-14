import { RemoveItemService } from "../../services/order/RemoveItemService";

import { Response,Request} from "express";

class RemoveItemConstroller{
    async handle(res: Response, req: Request){
        
        const itemId = req.query.item
        console.log(itemId);
        
        const item_id = req.query.item.toString()

        const removeItemService = new RemoveItemService();

        const item = await removeItemService.execute({
            item_id
        })
        return res.json(item)
    }
}

export {RemoveItemConstroller}