import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string
}

class DetailOrderService{
    async execute({order_id}: OrderRequest){
        const order = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            }
        })
        return order

    }
}

export {DetailOrderService}