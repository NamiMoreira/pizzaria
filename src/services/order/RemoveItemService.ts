import prismaClient from "../../prisma";

interface ItemRemove{
    item_id: string
}

class RemoveItemService{
    async execute({item_id}: ItemRemove){
        console.log(item_id);
        
        const item = prismaClient.item.delete({
            where: {
                id : item_id
            }          
        })
        return item;
    }
}

export {RemoveItemService}