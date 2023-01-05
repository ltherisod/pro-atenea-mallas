import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

  const {titulo,precio, btnSubmit, select, img,id} = producto;

  return (
    <div>
    <div className="card" style = {{width: "18rem", margin:"2rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">{precio}</p>
              <button className='SignosMasMenos'>-</button>
              <button className='SignosMasMenos'>+</button>
              <select className='btnSelect' style={{margin: "15px"}} name="talles" id="">{select}
                   <option value="">Talles</option>
                   <option value="">M</option>
                   <option value="">L</option>
                   <option value="">S</option>
                   <option value="">X</option>
              </select>
              <Link  to = {`/Item/detail/${id}`} className='btnSubmit' type='submit'>{btnSubmit}</Link>
            </div>  
    </div>
</div>
  )
}

export default Item