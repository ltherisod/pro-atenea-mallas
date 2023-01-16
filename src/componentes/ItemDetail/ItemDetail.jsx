import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Contador from "../contador/Contador"



const ItemDetail = ({Datos, producto} ) => {

   const agregado = useContext(CarritoContext)

  const prodCarrito = (contador) =>{
    agregado(producto, contador)
  }

  return (
    <>
    <h1>{Datos.titulo}</h1>
    <h2>precio:{Datos.precio}</h2>
    <img src={Datos.img} alt="{Datos.titulo}" />
    <Contador agregarAlCarrito = {prodCarrito} />
    </>
  )
}

export default ItemDetail