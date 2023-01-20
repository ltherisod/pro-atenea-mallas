import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';


const Carrito = (Datos) => {
   const {carrito} = useContext(CarritoContext);
   console.log(carrito);
   
  return (

   
      <div>
      
      </div>
);
}

export default Carrito