
import Product from "./pages/Product"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"

import {
  BrowserRouter ,
  Routes, 
   Route
}  from  "react-router-dom"


function App() {
  
  // const user=true;

  return (
   
     <BrowserRouter>
         <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/products/:category" element={<ProductList/>}/>
            <Route path="/product/:_id" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
                   
           
         </Routes>
     </BrowserRouter>
    )
}

export default App
