import './styles.css';
import React, { useState } from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Login  from './Login';
import {Route,Routes } from "react-router-dom";
import Signup from './Signup';
import Welcome from "./Welcome";
import Fooditems from './Fooditems';
import Cart from './Cart';
import Thankyou from './Thankyou';

function App(){
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <Navbar popup={togglePopup} />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/welcome" element={<Welcome/>}></Route>
          <Route path='/Fooditems' element={<Fooditems />}></Route>
          <Route path="/thankyou" element={<Login />}></Route>
        </Routes>
        {isOpen?"":<Cart handleClose={togglePopup}/>}
    </div>
  );
}

export default App;

