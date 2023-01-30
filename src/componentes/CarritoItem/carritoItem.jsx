import { useContext } from "react";

const CarritoItem = ({ id, titulo, precio, img }) => {
    //const  borrarItem = useContext(CarritoContext)

    return (
        <div className='card, divCarritoItem' style={{ width: "100%" }}>
            <img  src={img} className='imgCarritoItem' alt='...' />
            <div className='card-body, divCarritoItem2'>
                <h5>{titulo}</h5>
                <p>Precio: ${precio}</p>
                {/*<button className='btn btn-danger' onClick={() => borrarItem(id)}>
          Eliminar Producto
        </button>*/}
            </div>
        </div>
    );
};

export default CarritoItem;