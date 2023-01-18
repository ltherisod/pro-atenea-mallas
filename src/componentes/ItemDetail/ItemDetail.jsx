
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Contador from "../contador/Contador"


const ItemDetail = ({Datos } ) => {

  const {agregado} = useContext(CarritoContext);

  const agregadoAlCarrito =  (contador) => {
    agregado (  contador, Datos )
  }



  return (
    <>
    <h1>{Datos.titulo}</h1>
    <h2>precio:{Datos.precio}</h2>
    <img src={Datos.img} alt="{Datos.titulo}" />
    <Contador agregadoAlCarrito = {agregadoAlCarrito} />
    </>
  )
}

export default ItemDetail