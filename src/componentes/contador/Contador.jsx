import {useState} from 'react'

const Contador = () => {

  const [contador, setContador]= useState(0)

  const sumar = () => setContador(contador + 1)

  const restar = () => setContador(contador- 1)

  const select = () => setContador(contador+ select)

  return (
   sumar,
   restar,
   select
  )
}

export default Contador