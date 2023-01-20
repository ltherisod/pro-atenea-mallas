import React,  { createContext, useState  } from 'react'
import Item from '../componentes/Item/Item'

export const CarritoContext = createContext('')

const CarritoProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])

 const enElCarro = (id) => carrito.find(Item => Item.id === id)

 const agregado = (contador, Datos) =>{
  if(enElCarro (Datos.id)){
    setCarrito(carrito.map(product => {
      return product.id === Datos.id ? {...product, contador :(product.contador + contador)} : product
    }))
  }else{
    setCarrito([...carrito, {Datos, contador}])
  }
 }

 const vaciarCarro = () =>{
  setCarrito([])
 }

 const borrarItem = (idBorrar) =>{
  let nuevoItem = carrito.filter((itemCarrito) => itemCarrito.id !== idBorrar)
  setCarrito(nuevoItem)
 }

 const totalPrecio = () =>{
  return carrito.reduce((prev, act) => prev + act.contador * act.precio, 0)
 }

  const {guardarCarrito} = (Item) =>{
    setCarrito([...carrito, Item])
  }

  return (
    <CarritoContext.Provider value = {{carrito, setCarrito, agregado, vaciarCarro, borrarItem, totalPrecio, guardarCarrito}}>
      {children}
    </CarritoContext.Provider>
  ) 
}

export default CarritoProvider 