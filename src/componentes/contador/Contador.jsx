import React, { useContext } from 'react'
import { useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const Contador = (props) => {

    const { initialValue , item } = props;
    const {guardarCarrito} = useContext(CarritoContext)

    const [Contador, setContador] = useState(initialValue);
    const {stock} =  item

    const sumar = () => {

        if(Contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {

        if( contador > 1) {
            setContador(contador - 1)
        }
    }

    const producto = {
      ...item,
      cantidad:contador
    }



  return (
    <div>
        <button onClick={sumar}>Sumar</button>
        <h1>{count}</h1>
        <button onClick={restar}>Restar</button>
        <br/>
        <button onClick={() => guardarCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}

export default Contador