import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';


const Carrito = () => {
   const {carrito} = useContext(CarritoContext);
   
  return (

   
      <div>
         <h1>{carrito.length}</h1>
        
      </div>
);
}

export default Carrito