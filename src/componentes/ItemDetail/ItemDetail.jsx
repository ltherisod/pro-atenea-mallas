
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Contador from "../contador/Contador"
import Item from "../Item/Item";


const ItemDetail = ({Datos } ) => {

  const {agregado} = useContext(CarritoContext);

  const agregadoAlCarrito =  (Contador) => {
    agregado (  Contador, Datos )
  }



  return (
    <>
    <h1>{Datos.titulo}</h1>
    <h2>precio:{Datos.precio}</h2>
    <img src={Datos.img} alt="{Datos.titulo}" />
    <Contador agregarAlCarro = {agregadoAlCarrito} />
    </>
  )
}

export default ItemDetail