import React from "react";
import "./assert/bootstrap/Flip.css";
import "./App.css"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Navbar from "./component/Navbar"
import ProductsContextProvider from "./Global/ProductsContext";
import CartContextProvider from "./Global/CartContext";
import Products from "./component/Products"
import Cart from "./component/Cart"
import NotFound from "./component/NotFound"
function App(){
  return(
    <>
    <div>
    <ProductsContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
      <Switch>
          <Route path="/" exact component={Products}/>
          <Route path="/cart" exact component={Cart}/>
          <Route component={NotFound }/>
          
        </Switch>
      </Router>
      </CartContextProvider>
    </ProductsContextProvider>
</div>
      </>
)
}
export default App;