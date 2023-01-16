import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import Carrito from '../carrito/Carrito'

const Navbar = (props) => {

const carrito = useContext(CarritoContext)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              
              <div className='cajaLogo'>

              <a className="navbar-brand logo" href=""><img src='../img/logo.png' style={{width: "150px"}}/></a>

                     <div className='cajaTexto'>
                       <h1 className='texto'>Atenea Mallas</h1>
                     </div>

                    <button className="navbar-toggler botonBurger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>.

                   <div>
                       <NavLink to="/Carrito"><img src="https://e7.pngegg.com/pngimages/603/776/png-clipart-shopping-cart-shopping-cart.png" alt="" style={{width: "40px"}} /></NavLink>
                    </div>
                 </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    
                    <form className="d-flex">

                      <button type='submit' style={{width: "80px", border: "2rem", background: "pink"}}> <NavLink to="/Login" style={{color: "#373737"}}>Login</NavLink></button>

                       <div>
                             <NavLink to="/Carrito"><img className='imgCarrito' src="https://e7.pngegg.com/pngimages/603/776/png-clipart-shopping-cart-shopping-cart.png" alt="" style={{width: "40px"}} /></NavLink>
                       </div>
                    </form>
    
                 </div>
            </div>
      </nav>
    </div>
  )
}

export default Navbar