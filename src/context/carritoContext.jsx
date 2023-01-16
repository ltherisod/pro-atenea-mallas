import React,{createContext, useState} from 'react'

export const CarritoContext = createContext();

const CarritoContextProvider = ({children}) => {

      const [carrito , setCarrito] = useState([]);

    const {estaEnElCarrito} = (id) => carrito.find( (Item) => Item.id === id);

    const agregado = (producto, contador) => {
        if(estaEnElCarrito(producto.id)) {
            setCarrito(carrito.map(producto =>{
                return producto.id === producto.id ? {...producto, contador:producto.contador + contador} : producto
            }))
        } else{
            setCarrito([...carrito, {producto, contador}]);
        }
    }

  return (
    <CarritoContext.Provider value={{carrito, setCarrito, agregado, estaEnElCarrito }}>
       {children}
    </CarritoContext.Provider>
  )
}

export default CarritoContextProvider