import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import { RoutersWeb } from '../../Routers/createRouters';
import AuthUser from '../../Utils/AuthUser';

const Home:React.FC = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!AuthUser.isUserAuthenticate()){
      navigate(RoutersWeb.LOGIN);
    }    
  },[navigate]);

  return(
    <div>
      <NavBar />
      <div>
        <h2>Home</h2>
      </div>
    </div>
  );
}

export default Home;