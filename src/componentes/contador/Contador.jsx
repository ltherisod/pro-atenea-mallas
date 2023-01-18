 import {useState} from 'react'
 
const Contador = ({agregadoAlCarrito}) => {


  const [contador, setContador]= useState(1);
  const sumar = () =>setContador( contador + 1)
  const restar = () => setContador( contador - 1)
  const select = () => setContador(contador === select)

  return (
   <div>
      <button  className='botones' onClick = {() => sumar()}>+</button>
      <h1>{contador}</h1>
      <button className='botones' onClick = {() => restar ()}>-</button>

      <button onClick={() =>{

         agregadoAlCarrito (Contador)

      } }> agregar </button>

      <select className='Select' onClick={() => select()} name="" id="">
             <option value="">Talles</option>
             <option value="">M</option>
             <option value="">S</option>
             <option value="">L</option>
             <option value="">XL</option>

      </select>
   </div>
  )
} 

export default Contador