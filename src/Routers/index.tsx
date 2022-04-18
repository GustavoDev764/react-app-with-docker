
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Sobre from "../Screens/Sobre";
import { RoutersWeb } from "./createRouters";

const Routers:React.FC = ()=>{

  return(
    <Routes>

      <Route index element={<Login />}/> 
          
      <Route 
        path={RoutersWeb.LOGIN}  
        element={<Login />}/> 
      
      <Route 
        path={RoutersWeb.HOME}  
        element={<Home />}/> 
      
      <Route 
        path={RoutersWeb.SOBRE}  
        element={<Sobre />}/> 

    </Routes>
  );
}

export default Routers;
