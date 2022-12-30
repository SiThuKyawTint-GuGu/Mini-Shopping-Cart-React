import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Cart from './Cart'
const Mainrouter = () => {
  const [cart, setCart] = useState([]);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home cart={cart} setCart={setCart} />}
      ></Route>
      <Route
        path="/about"
        element={<About cart={cart} setCart={setCart} />}
      ></Route>
      <Route
        path="/cart"
        element={<Cart cart={cart} setCart={setCart} />}
      ></Route>
    </Routes>
  );
}

export default Mainrouter