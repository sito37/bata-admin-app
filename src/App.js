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
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
import { useEffect } from "react";


function App() {
 const {userToken} = useSelector(state => state.auth)

 const authenticated = () => {
  if(userToken){
    return true
  }else{
    return false
  }
 }
 useEffect(() => {
  authenticated()
 }, [userToken, authenticated])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={
          <PrivateRoute>
             <Home/>
          </PrivateRoute>} />
          <Route path="/signin" element={userToken ? <Navigate to="/" /> : <Signin />} />
          <Route path="/signup" element={userToken ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
