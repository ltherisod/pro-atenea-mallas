import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/Data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

const ItemListContainer = () => {

  
  const cards = [
    {
      id: 1,
      nombre: "kassie",
      precio: "$2.500"
    },
    {
      id: 2,
      titulo: "Stefanie",
      precio: "$2.500"
    },
    {
      id: 3,
      titulo: "Josef",
      precio: "$2.500"
    },
    {
      id: 4,
      titulo: "Bella",
      precio: "$2.500"
    },
    {
      iid: 5,
      titulo: "Rosie",
      precio: "$2.500"
    },
    {
      id: 6,
      titulo: "Steff",
      precio: "$2.500"
    },
    {
      id: 7,
      titulo: "Lorem",
      precio: "$2.500"
    },
    {
      id: 8,
      titulo: "Cloe",
      precio: "$2.500"
    },
    {id: 9,
      titulo: "Juliet",
      precio: "$2.500"
    },
    {
      idid: 10,
      titulo: "Roma",
      precio: "$2.500"
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