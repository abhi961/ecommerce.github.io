import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from "./component/HomeScreen";
import ProductScreen from "./component/Productscreen";

function App (){
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return(
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/" >India Shop</Link>
                </div>
                <div className="header-link">
                    <a href="cart.html">Cart</a>
                    <a href="sign.html">Sign In</a>
                </div>
            </header>
            <aside className="sidebar">
                 <h3>Shopping Categories</h3>
                 <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                 <ul>
                     <li>
                         <a href="index.html">Pants</a>
                     </li>
                     <li>
                        <a href="index.html">Shirts</a>
                    </li>

                 </ul>
            </aside>
            <main className="main">
                <div className="content">
                  <Route path="/product/:id" exact={true} component={ProductScreen}/>
                  <Route path="/" exact={true} component={HomeScreen}/>
                  
                     
                </div>
               
            </main>
            <footer className="footer">
                All Rights Reserved
            </footer>
        </div>
        </BrowserRouter>
  )
}
export default App;