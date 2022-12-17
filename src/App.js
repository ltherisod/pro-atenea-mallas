import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Card from './componentes/card/Card';
import Footer from './componentes/footer/Footer';
import Login from './componentes/Login/Login.jsx';
import Error404 from './componentes/404/Error404';
import Carrito from './componentes/Carrito/Carrito';
import Main from './componentes/main/main';
import { BrowserRouter as Router,Routes,  Route, NavLink } from 'react-router-dom'


function App() {

  const Cards = [
    {
      img : "https://i.pinimg.com/564x/1d/44/2c/1d442c925ea06152466242d82f7e7803.jpg",
      titulo : "Kassie",
      precio : "$ 2.500",
      select : "Talles",
      btnSubmit : "Comprar"
    },
    {
      img : "https://i.pinimg.com/564x/25/1a/a9/251aa9dce5c5dc3c0ebc85c5e6107955.jpg",
      titulo : "Stefanie",
      precio : "$ 2.500",
      select : "Talles",
      btnSubmit : "Comprar"
    },
    {
      img : "https://i.pinimg.com/564x/4d/99/df/4d99dfab4817c863137f066303ef4fa8.jpg",
      titulo : "Josef",
      precio : "$ 2.500",
      select : "Talles",
      btnSubmit : "Comprar"
    },
    {
      img : "https://i.pinimg.com/564x/fd/47/23/fd472366430bfe6faa62489db31a1352.jpg",
      titulo : "Bella",
      precio : "$ 2.500",
      select : "Talles",
      btnSubmit : "Comprar"
    },
    {
      img : "https://i.pinimg.com/564x/05/2e/54/052e54c24783cd374f55d609159114e4.jpg",
      titulo : "Rosie",
      precio : "$ 2.500",
      select : "Talles",
      btnSubmit : "Comprar"
    },
    {
      img : "https://i.pinimg.com/736x/1a/64/ee/1a64eed4776402bf12bbcc356f252c7c.jpg",
      titulo : "Steff",
      precio : "$ 2.500",
      select : "Talles",
      btnSubmit : "Comprar"
    },
    {
      img : "https://i.pinimg.com/564x/3f/ee/d1/3feed1c22d0eb302cceca481b999f617.jpg",
      titulo : "Lorem",
      precio : "$ 2.500",
      select : "Talles",
      btnSubmit : "Comprar"
    },
    {
      img : "https://i.pinimg.com/564x/1f/e8/5b/1fe85bdfee7e5b93af2db1c049da7b12.jpg",
      titulo : "Cloe",
      precio : "$ 2.500",
      select : "Talles",
      btnSubmit : "Comprar"
    }
  ];

  return (
    <div className="App">
        <Navbar/>
        <div className='container-fluid'>
                 {Cards.map(({titulo, precio, select, btnSubmit, img}, index)=>(
                  <Card
                  key = {index}
                  img = {img}
                  titulo = {titulo}
                  precio = {precio}
                  select = {select}
                  btnSubmit = {btnSubmit}
                  />)
                  )}
        </div>

        <Router>
                    <Routes>
                          <Route path='/login' element = {<Login/>} />
                          <Route path='/Carrito' element = {<Carrito/>} />
                          <Route path='*' element = {<Error404/>} />

                    </Routes>
        </Router>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
  );
}
 
export default App;