import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './Routers';

function App() {
  return (
    <BrowserRouter>
      <Routers />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
