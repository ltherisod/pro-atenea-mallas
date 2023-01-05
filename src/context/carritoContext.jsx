import React,{createContext, useState} from 'react'
import Contador from '../componentes/contador/Contador';
import Item from '../componentes/Item/Item';
import { getProducts } from '../mock/Data';

export const CarritoContext = createContext();

const stock = (id) => Item.find(tem => Item.id === id)

const guardarCarrito = (getProducts, Contador) =>{
  console.log(getProducts, contador);
}



const CarritoContextProvider = ({children}) => {

      const [carrito , setCarrito] = useState([]);

      const guardarCarrito = (getProducts) => {
        setCarrito([...carrito])
      }


  return (
    <CarritoContext.Provider value={{carrito,guardarCarrito}}>
       {children}
    </CarritoContext.Provider>
  )
}

export default CarritoContextProvider