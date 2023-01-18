import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const Carrito = () => {

   const {Carrito} = useContext(CarritoContext)

   console.log(Carrito);

  return (

   
      <div>
         <h2>Productos en el carrito</h2>
      </div>
);
}

export default Carrito