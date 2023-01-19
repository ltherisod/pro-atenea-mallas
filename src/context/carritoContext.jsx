import React,  { createContext, useState  } from 'react'
import Item from '../componentes/Item/Item'

export const CarritoContext = createContext('')

const CarritoProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])

 const enElCarro = (id) => carrito.find(Item => Item.id === id)

 const agregado = (contador, Datos) =>{
  //console.log(contador, Datos);
  if(enElCarro (Item.id)){
    setCarrito(carrito.map(product => {
      return product.id === Item.id ? {...product, contador :(Item.contador + contador)} : Item
    }))
  }else{
    setCarrito([...carrito, {Item, contador}])
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