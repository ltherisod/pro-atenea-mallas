import React from 'react'

const Navbar = (props) => {
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
                       <a href=""><img src="https://e7.pngegg.com/pngimages/603/776/png-clipart-shopping-cart-shopping-cart.png" alt="" style={{width: "40px"}} /></a>
                    </div>
                 </button>
              </div>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                       <a className="nav-link active" aria-current="page" href="#"></a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#"></a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                      </li>
                   </ul>
                   <form className="d-flex">

                      <button type='submit' style={{width: "80px", border: "2rem", background: "pink"}}> <a href="" style={{color: "#373737"}}>Login</a></button>

                       <div>
                             <a href=""><img className='imgCarrito' src="https://e7.pngegg.com/pngimages/603/776/png-clipart-shopping-cart-shopping-cart.png" alt="" style={{width: "40px"}} /></a>
                       </div>
                   </form>
    
                 </div>
            </div>
      </nav>
    </div>
  )
}

export default Navbar