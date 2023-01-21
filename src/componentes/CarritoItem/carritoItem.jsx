import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const carritoItem = (id, titulo, precio, img) => {

    //const  borrarItem = useContext(CarritoContext)


  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={img} className='' alt='...' width={50} height={'auto'} />
      <div className='card-body'>
        <h5 className='card-title'>{titulo}</h5>
        <p className='card-text'>Precio: ${precio}</p>
       { /*<button className='btn btn-danger' onClick={() => borrarItem(id)}>
          Eliminar Producto
        </button>*/}
      </div>
    </div>
  )
}

export default carritoItem