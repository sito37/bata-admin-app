import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import PrivateRoute from "./components/HOC/private-route";
import {useSelector, useDispatch} from "react-redux"
import {Navigate} from "react-router-dom"
import { useEffect } from "react";
import Products from "./pages/products";
import Orders from "./pages/orders";
import Categories from "./pages/categories";
import {getAllCategories} from '../src/redux/features/category/category.actions'


function App() {
 const {userToken} = useSelector(state => state.auth)
const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllCategories());

  })


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<PrivateRoute> <Home/> </PrivateRoute>} />
          <Route path="/products"  element={<PrivateRoute> <Products />  </PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute> <Orders />  </PrivateRoute>} />
          <Route path="/categories" element={<PrivateRoute> <Categories />  </PrivateRoute>} />
          <Route path="/signin" element={userToken ? <Navigate to="/" /> : <Signin />} />
          <Route path="/signup" element={userToken ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
