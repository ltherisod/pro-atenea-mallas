import React, {useContext} from 'react'
import Contador from '../contador/Contador'
import { CarritoContext} from '../../context/carritoContext'
import Item from '../Item/Item';


const Carrito = () => {

  const { getProducts, agregarProducto, eliminarProducto } = useContext(CarritoContext);





  return (

   
      <div>
         <h2>Productos en el carrito</h2>
         {getProducts.map((Item) =>(
          <li key={Item.id}>{Item.nombre}-Precio: {Item.precio}-
          <button onClick={()=> eliminarProducto(Item.id)}> Eliminar </button>
          </li>
         ))}
      </div>
);
}

export default Carrito