import React from 'react'
import { Link } from 'react-router-dom'
import Contador from '../contador/Contador';

const Item = ({producto}) => {

  const {titulo,precio, btnSubmit, select, img,id} = producto;

  const {sumar, restar} = Contador()

  return (
    <div>
         <div className="card" style = {{width: "18rem", margin:"2rem"}}>
                 <img src={img} className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">{titulo}</h5>
                   <p className="card-text">{precio}</p>
                   <Contador/>
                   <button type='submit' className='botones' onClick = {sumar}>+</button>
                   <button type='submit' className='botones' onClick = {restar}>-</button>
                   <select className='Select' onClick={select} name="" id="">
                          <option value="">Talles</option>
                          <option value="">M</option>
                          <option value="">S</option>
                          <option value="">L</option>
                          <option value="">XL</option>

                   </select>

                   <Link  to = {`/Item/detail/${id}`} className='btnSubmit' type='submit'>{btnSubmit}</Link>
                 </div>  
         </div>
</div>
  )
}

export default Item