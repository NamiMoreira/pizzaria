import prismaClient from "../../prisma";
interface CategoryRequest{
    name: string
}


class CreatedCategoryService{
    async execute( {name} : CategoryRequest ){

        if (name === '') {
            throw new Error ('Name invalid')
        }

        const category = await prismaClient.category.create({
           data:{
            name: name,
        },
        select:{
            id: true,
            name: true
        }  
           })

        return category;
    }
}

export {CreatedCategoryService}