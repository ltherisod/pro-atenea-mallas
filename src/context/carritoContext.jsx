import React,{createContext, useState} from 'react'



export const CarritoContext = createContext('');


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