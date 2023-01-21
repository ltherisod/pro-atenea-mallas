import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import carritoItem from '../CarritoItem/carritoItem';


const Carrito = () => {
   const {carrito} = useContext(CarritoContext);

   const CarritoItem = carrito.map(({Datos}) => (
    <CarritoItem
    key={Datos.id}
    titulo = {Datos.titulo}
    precio = {Datos.precio}
    img = {Datos.img}
    />

   ))

   
  return (

   
   <div>
    
    <div>
        <carritoItem />
    </div>
      
  <form className='formCompras' action="">

       <div className='cajaCompras'> 

           <h2 className='tituloCompras'>Formualrio de compras</h2>

           <div className='cajaInputcompras'> 
               <input className='inputCompras' type="text" placeholder='ingresar nombre' />
           </div>

           <div className='cajaInputcompras'>
               <input className='inputCompras' type="password" placeholder='ingresar clave' />
           </div>

       </div>
   </form>
</div>
);
}

export default Carrito