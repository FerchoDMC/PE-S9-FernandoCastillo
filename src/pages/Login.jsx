import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '../components/button.mui.component.jsx';
import InputMui from '../components/input.mui.component.jsx';
import { LoginService } from '../utils/login.js';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    
  const [count, setCount] = useState(5)

  const [asignature, setAsignature] = useState('');
  const [creditos, setCreditos] = useState(undefined);
  const[user, setUser]= useState ('');
  const[passwd, setPasswd]= useState ('');
  const navigate = useNavigate ();




  const handleSendform =()=>{
    const resLogin = LoginService (user, passwd);
    alert(`User: ${user} - Password: ${passwd}`);
    console.log (resLogin);
    if (resLogin == null){
        alert ("Login failed: invalid credentials");
    }else{
        navigate ('/tablero');
    }
  }
  
  const [showPassword, setShowPassword] = useState (false);

  return (
    <>
      <h1>Vite + React</h1> 
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSendform();
      }}>
        <InputMui 
        placeholder='admin' 
        label='Usuario' 
        value={user} 
        onChange={(e)=> {setUser(e.target.value)}} 
        required/>
        <br/>
        <br/>
        <InputMui 
        endIcon={
          <IconButton onClick={() => { setShowPassword(!showPassword); }} size='small'>
            { showPassword ? <VisibilityOffIcon /> : <VisibilityIcon /> }
          </IconButton>
        }
        placeholder='paswd123' 
        label='Contraseña' 
        type={showPassword ? 'text' : 'password'}  
        value={passwd} 
        onChange={(e)=>{setPasswd(e.target.value)}}/>

        <br/>
        <br/>

        <Button type='submit' name={`Log In`} backgroundColor='red' color='black'/>

      </form>
      <div className="card"> 
      </div>
    </>
  )
}

export default LoginPage