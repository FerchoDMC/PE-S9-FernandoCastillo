import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from './components/button.mui.component.jsx';
import InputMui from './components/input.mui.component.jsx';
function App() {
  const [count, setCount] = useState(5)

  const [asignature, setAsignature] = useState('');
  const [creditos, setCreditos] = useState(undefined);


  const handleSendform =()=>{
    alert(`Materia: ${asignature} - Creditos: ${creditos}`)
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
        startIcon={<PersonIcon />}
        placeholder='admin' 
        label='Usuario' 
        value={asignature} 
        onChange={(e)=> {setAsignature(e.target.value)}} 
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
        value={creditos} 
        onChange={(e)=>{setCreditos(e.target.value)}}/>

        <br/>
        <br/>

        <Button type='submit' name={`Log In`} backgroundColor='red' color='black'/>

      </form>
      <div className="card"> 
      </div>
    </>
  )
}

export default App