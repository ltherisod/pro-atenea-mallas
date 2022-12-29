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


  return (
   <div></div>
  )
}

export default Contador