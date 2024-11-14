import prismaClient from "../../prisma";

class CategoryService{
   async execute(){
     const category = await prismaClient.category.findMany({
        select:{
            id: true,
            name: true
            }
      })
      return category;
   }
}

export {CategoryService}