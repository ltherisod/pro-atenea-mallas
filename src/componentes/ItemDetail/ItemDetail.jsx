import { useEffect } from "react"

const ItemDetail = ({Datos} ) => {
  return (
    <>
    <h1>{Datos.titulo}</h1>
    <h2>precio:{Datos.precio}</h2>
    <img src={Datos.img} alt="{Datos.titulo}" />
    </>
  )
}

export default ItemDetail