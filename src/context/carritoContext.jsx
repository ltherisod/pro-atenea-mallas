import React,{createContext, useState} from 'react'


export const CarritoContext = createContext('');


const CarritoContextProvider = ({children}) => {
    const productos = [
       
      ]

      const [carrito , setCarrito] = useState([]);

      const guardarCarrito = (producto) => {
        setCarrito([...carrito,producto])
      }


  return (
    <CarritoContext.Provider value={{productos,carrito,guardarCarrito}}>
       {children}
    </CarritoContext.Provider>
  )
}

export default CarritoContextProvider