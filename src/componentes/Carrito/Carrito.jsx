import React, {useContext} from 'react'
import Contador from '../contador/Contador'
import { CarritoContext, CarritoContextProvider } from '../../context/carritoContext'


const Carrito = () => {

  const { getProducts, Sumar, Restar } = useContext(CarritoContext);




  return (

   
      <div>
         <h2>Productos en el carrito</h2>
      </div>
);
}

export default Carrito