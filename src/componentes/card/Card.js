import React from 'react'

const Card = (props) => {
  const {titulo,precio, btnSubmit, select, img} = props;
  
  return (
    <div>
        <div className="card" style = {{width: "18rem", margin:"2rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{titulo}</h5>
                  <p className="card-text">{precio}</p>
                  <select className='btnSelect' style={{margin: "15px"}} name="talles" id="">{select}
                       <option value="">Talles</option>
                       <option value="">M</option>
                       <option value="">L</option>
                       <option value="">S</option>
                       <option value="">X</option>
                  </select>
                  <button className='btnSubmit' type='submit'>{btnSubmit}</button>
                </div>  
        </div>
    </div>
  )
}

export default Card