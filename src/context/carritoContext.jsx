import React,  { createContext, useState  } from 'react'
import Contador from '../componentes/contador/Contador' 

export const CarritoContext = createContext('')

const CarritoProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])

 // const enElCarro = (id) => carrito.find(Item => Item.id === id)

 const agregado = (Contador, Datos) =>{
  console.log(Contador, Datos);
 }




  return (
    <CarritoContext.Provider value = {{carrito, setCarrito, agregado}}>
      {children}
    </CarritoContext.Provider>
  ) 
}

export default CarritoProvider 