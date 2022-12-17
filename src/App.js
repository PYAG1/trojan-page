import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Finalfile from "./components/finalfile";
import Home from "./components/home";
import Login from "./components/login";
import Nav from "./components/nav";
import User from "./components/user";
import Signup from "./signup";
import History from "./components/new";
import Eror404 from "./eror404";
import Nohistory from "./components/Norecent";


function App() {

  return (
    <div className=" overflow-x-hidden h-full bg-gradient-to-b from-[#c2b4d9] to-[#f0f8ba]">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Eror404/>}/>
        <Route path='/user' element={<Finalfile><User/></Finalfile>}>
        <Route index element={<History/>}/>
          <Route path='history' element={<History/>}/>
          <Route path='norecent' element={<Nohistory/>}/>
          
        
          </Route>
     
        

      </Routes>
  
   
 
    </div>
  );
}

export default App;
