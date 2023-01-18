import React,  { createContext, useState  } from 'react'
import Item from '../componentes/Item/Item'

export const CarritoContext = createContext('')

const CarritoProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])

 const enElCarro = (id) => carrito.find(Item => Item.id === id)

 const agregado = (contador, Datos) =>{
  console.log(contador, Datos);
  if(enElCarro (Item.id)){
    setCarrito(carrito.map(product => {
      return product.id === Item.id ? {...product, contador :(Item.contador + contador)} : Item
    }))
  }else{
    setCarrito([...carrito, {Item, contador}])
  }
 }

 const vaviarCarro = () =>{
  setCarrito([])
 }

 const borrarItem = (idBorrar) =>{
  let nuevoItem = carrito.filter((itemCarrito) => itemCarrito.id !== idBorrar)
  setCarrito(nuevoItem)
 }

 const totalprecio = () =>{
  return carrito.reduce((prev, act) => prev + act.contador * act.precio, 0)
 }


  return (
    <CarritoContext.Provider value = {{carrito, setCarrito, agregado, vaviarCarro, borrarItem, totalprecio}}>
      {children}
    </CarritoContext.Provider>
  ) 
}

export default CarritoProvider 