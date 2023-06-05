import Image from "next/image"

function Categoria({categoria}) {

    const {nombre , icono , id} = categoria
  return (
    <div>
         <Image
         src={`/assets/img/icono_${icono}.svg`}
         alt="Imagen Icono"
         />
    </div>
  )
}

export default Categoria