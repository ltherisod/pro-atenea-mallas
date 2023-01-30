import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const Carrito = () => {

  const {carrito}  = useContext (CarritoContext);

  const carritoItem = carrito.map(({Datos}) =>
  <carritoItem
    key = {Datos.id}
    titulo = {Datos.titulo}
    precio = {Datos.precio}
    img = {Datos.img}

  />)
  return (
    <carritoItem/>
  )
}

export default Carrito