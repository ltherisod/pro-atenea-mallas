import { useEffect } from "react"
import ItemDetailContainer from "../ItemDetailCiontainer/ItemDetailContainer"

const ItemDetail = ({Datos} ) => {
  return (
    <h1>{Datos.precio} </h1>
  )
}

export default ItemDetail