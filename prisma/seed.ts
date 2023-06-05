import { categorias } from "./data/categorias";
import { productos } from "./data/productos";
import { PrismaClient} from "@prisma/client" //siempre que hagamos una operacion nuestra base de datos con prisma

const prisma = new PrismaClient()

const main = async () : Promise<void> =>{
    try{
      await prisma.categoria.createMany({ //create en many para crear multiples elementos , data es necesario son los datos que vamos agregar , data lo requiere prisma
        data: categorias
      })
      await prisma.producto.createMany({
        data: productos
      })

    }catch(error){
        console.log(error)
    }
}

main()