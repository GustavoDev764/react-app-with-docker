/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {RoutersWeb} from '../../Routers/createRouters';
import AuthUser from '../../Utils/AuthUser';
import './style.css';

interface IUser{  
  UserName: string;
  Name: string;
}

const NavBar:React.FC = ()=>{
  const navigate = useNavigate();
  const user = useMemo(()=>{
    try {
      const data = AuthUser.getUser();

      if(data){
        return JSON.parse(data) as IUser;
      }
    } catch (error) {
      
    }

    return undefined;
  },[]);

  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            <img src={'/images/logo-colorido-e-branco.png'} alt="" className={'logo'} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to={RoutersWeb.HOME} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={RoutersWeb.SOBRE} className="nav-link">
                 Sobre
                </Link>
              </li>            
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">{`${user?.UserName} - ${user?.Name}`}</a>
                </li>
                <li className="nav-item">
                  <Link 
                    onClick={()=>{
                      AuthUser.logout();
                      navigate(RoutersWeb.LOGIN);
                    }}
                    to={RoutersWeb.LOGIN} 
                    className="nav-link">                    
                    Sair
                  </Link>
                </li>            
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;