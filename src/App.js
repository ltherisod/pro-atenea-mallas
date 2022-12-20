
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/footer/Footer';
import Login from './componentes/Login/Login.jsx';
import Error404 from './componentes/404/Error404';
import Carrito from './componentes/Carrito/Carrito';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router,Routes,  Route, } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailCiontainer/ItemDetailContainer';


function App() {

 

  return (
    <div className="App">
        <Navbar/>
        <Router>
                    <Routes>
                          <Route path='/' element={<ItemListContainer/>}/>
                          <Route path='/login' element = {<Login/>} />
                          <Route path='/Carrito' element = {<Carrito/>} />
                          <Route path='*' element = {<Error404/>} />
                          <Route path='/' element = {<ItemDetailContainer/>} />


                    </Routes>
        </Router>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
  );
}
 
export default App;