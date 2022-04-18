/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Toasty from '../../Utils/Toasty';
import api from '../../Services/api';
import AuthUser from '../../Utils/AuthUser';
import { RoutersWeb } from '../../Routers/createRouters';

const Login:React.FC = () => {
  const navigation = useNavigate();
 
  const [username, setUsername] = useState('@trademaster.com.br');
  const [password, setPassword] = useState('');

  const onSubmit = useCallback((e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const idToasty = Toasty.loading("Autenticando...");
   
    api.get(`/login?user=${username}&password=${password}`)
    .then((res)=>{
      Toasty.update({
        id: idToasty,
        message: 'Login efetuado com sucesso!',
        type: 'success',
      });

      const user = { UserName: res?.data?.UserName, Name: res?.data?.Name };

      AuthUser.setUser(user);

      navigation(RoutersWeb.HOME);         
    })
    .catch((error)=>{
      Toasty.update({
        id: idToasty,
        message: `Acesso Negado, Verifique se o usuário e senha condizem com credenciais válidas.`,
        type: 'error',
      });
    });
  },[username, password, navigation]);

  return(
    <div>
      <div className="container mt-5 d-flex justify-content-center">     
        <div className={`cardlogin card mt-5`}>
          <div className='d-flex justify-content-center mt-3'>        
            <img 
              src={'/images/logo-colorido-e-branco.png'} 
              alt="Card image" 
              className={'cardlogo'} />
          </div>
          <div className="card-body">
            <form action="/action_page.php" onSubmit={onSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="Usuario">Usuario:</label>
                <input 
                  type="text" 
                  value={username}
                  required
                  onChange={(e)=>{setUsername(e.target.value)}}
                  className="form-control" 
                  id="Usuario" 
                  placeholder="Usuario" name="email"/>
              </div>
              <div className="mb-3">
                <label htmlFor="pwd">Senha:</label>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  className="form-control" id="pwd" placeholder="Digite a senha" name="pswd"/>
              </div>        
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;