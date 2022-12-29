import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useContext } from 'react';
import { CarritoContext } from '../../context/carritoContext';

const ItemListContainer = () => {
  const cards = [
    {
      id: 1,
      nombre: "kassie"
    },
  ]


  const [listaProductos, setListaProductos] = useState([]);
 

  useEffect(() => {
    getProducts()
      .then((res) => setListaProductos(res))
      .catch((error) => console.log(error))
  }, []);

  const {getProducts} = useContext (CarritoContext)

  return (
    <div>
      {getProducts.map((item, index) =>(
        <item item = {item} key = {index}/>
      )
      )}
       <ItemList listaProductos={listaProductos} />

       <>
            {cards.map(({id,nombre})=>

            <cards id= {id} nombre = {nombre}/>
            
            )}

       </>
    </div>
  );
};

export default ItemListContainer;