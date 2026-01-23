import { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Box, Grid} from '@mui/material';
import Button from '../components/button.mui.component.jsx';
import InputMui from '../components/input.mui.component.jsx';
import { LoginService } from '../utils/login.js';
import { useNavigate } from 'react-router-dom';
import AlertMui from '../components/alert.mui.component.jsx';

import { setUserData, rmDataUser } from '../storage/user.model.jsx';


function LoginPage() {
  const [user, setUser] = useState('');
  const [passwd, setPasswd] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [stateModal, setStateModal] = useState({
    open: false,
    title: 'Login',
    message: '',
    status: 'info',
    showbtnl: false,
    showbtnr: false,
    btnNameR: '',
    actionBtnL: () => {},
    actionBtnR: () => {},
  });

  const handleCloseModal = () => {
    setStateModal({ ...stateModal, open: false });
  };

  const handleRegister = () => {
    navigate('/registro');
  };

  const handleSendform = () => {
    const resLogin = LoginService(user, passwd);
    console.log(resLogin);

    if (resLogin == null) {
      setStateModal({
        open: true,
        title: 'Error de autenticación',
        message: 'Usuario o contraseña inválidas',
        status: 'error',
        showbtnl: true,
        showbtnr: true,
        btnNameR: 'Registrarse',
        actionBtnL: handleCloseModal,
        actionBtnR: handleRegister,
      });
      return;
    }

    setUserData(resLogin);
    navigateUser(resLogin?.role);
    
  };

  const navigateUser = (role) => {
    switch (role) {
      case "admin":
        navigate('/tablero/registrohotel');
        break;
      default:
        break;
    }
    
  }

  useEffect(
    () => {
      rmDataUser();
    }, 
    []
  );


  return (
  <>
    <AlertMui 
      open={stateModal.open} 
      message={stateModal.message}
      status={stateModal.status}
      showBtnL={stateModal.showbtnl}
      handleClose={handleCloseModal}
      actionBtnL={stateModal.actionBtnL}
      showBtnR={stateModal.showbtnr}
      btnNameR={stateModal.btnNameR}
      actionBtnR={stateModal.actionBtnR}

      
    />
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyItems="center"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h1>Iniciar Sesion</h1>
        </Grid>

        <Grid item size={{ xs: 10, sm: 8, md: 6, lg: 4 }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendform();
            }}
          >
            <Grid
              container
              spacing={2}
              justifyItems="center"
              justifyContent="center"
              alignItems="center"
            >
              <Grid size={12}>
                <InputMui
                  placeholder="admin"
                  label="Usuario"
                  value={user}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  required
                />
              </Grid>

              <Grid size={12}>
                <InputMui
                  endIcon={
                    <IconButton
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      size="small"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  }
                  placeholder="paswd123"
                  label="Contraseña"
                  type={showPassword ? 'text' : 'password'}
                  value={passwd}
                  onChange={(e) => {
                    setPasswd(e.target.value);
                  }}
                />
              </Grid>

              <Grid size={6}>
                <Button
                  type="submit"
                  name={`Log In`}
                  backgroundColor="red"
                  color="black"
                />
              </Grid>

              <Grid size={6}>
                <Button
                  type="button"
                  onClick={handleRegister}
                  name={`Registro`}
                  backgroundColor="blue"
                  color="white"
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  </>
  );
}
export default LoginPage