
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/footer/Footer';
import Login from './componentes/Login/Login.jsx';
import Error404 from './componentes/404/Error404';
import Carrito from './componentes/Carrito/Carrito';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router,Routes,  Route, BrowserRouter, } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailCiontainer/ItemDetailContainer';
;


function App() {
  return (
    <Router className="App">
        <Navbar/>
        <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/Login' element = {<Login/>} />
                <Route path='/Carrito' element = {<Carrito/>} />
                <Route path='*' element = {<Error404/>} />
                <Route path='/Item/detail/:id' element = {<ItemDetailContainer/>} />


         </Routes>
      <div>
        <Footer></Footer>
      </div>
    </Router>
  );
}
 
export default App; 