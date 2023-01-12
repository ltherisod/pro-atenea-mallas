
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Login from './componentes/Login/Login.jsx';
import Carrito from './componentes/carrito/Carrito';
import Error404 from './componentes/404/Error404';
import CarritoContextProvider from './context/carritoContext';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router,Routes,  Route, BrowserRouter, } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailCiontainer/ItemDetailContainer';
import Contador from './componentes/contador/Contador';

;


function App() {
  return (
    <CarritoContextProvider>
        <Router className="App">
            <Navbar/>
            <Contador/>
            <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/Login' element = {<Login/>} />
                    <Route path='/Carrito' element = {<Carrito/>} />
                    <Route path='*' element = {<Error404/>} />
                    <Route path='/Item/detail/:id' element = {<ItemDetailContainer/>} />
    
    
             </Routes>
        </Router>
    </CarritoContextProvider >
      );
    
}
 
export default App; 