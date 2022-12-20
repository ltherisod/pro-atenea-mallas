import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/Data';


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


  return (
    <div>
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