import React, { useState, useCallback, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import { RoutersWeb } from '../../Routers/createRouters';
import AuthUser from '../../Utils/AuthUser';
import api from '../../Services/api';

const Sobre:React.FC = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const getTextServe = useCallback(()=>{
    api.get('/ajuda')
    .then((res)=>{
      setText(res?.data?.Ajuda);
    }).catch((error)=>{})
  },[]);

  useEffect(()=>{
    getTextServe();
  },[getTextServe]);

  

  useEffect(()=>{
    if(!AuthUser.isUserAuthenticate()){
      navigate(RoutersWeb.LOGIN);
    }    
  },[navigate]);

  return(
    <div>
      <NavBar />
      <div className='container mt-5'>
       <p>{text}</p>       
      </div> 
    </div>
  );
}

export default Sobre;