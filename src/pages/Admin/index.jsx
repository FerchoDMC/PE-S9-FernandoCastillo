import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, Outlet } from 'react-router-dom';

import HotelIcon from '@mui/icons-material/Hotel';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import GroupIcon from '@mui/icons-material/Group';
import ListItemIcon from '@mui/material/ListItemIcon';


const navItems = [
  {
    label:"Registro Hotel",
    path:"/tablero/registrohotel",
    icon:"HotelIcon"
  },
  {
    label:"Gestionar Hoteles",
    path:"/tablero/gestionhoteles",
    icon:"Manage"
  },
  {
    label:"Gestionar Usuarios",
    path:"/tablero/usuarios",
    icon:"Users",
    options: [
      {
        label:"Crear",
        path:"/tablero/usuarios/crear"
      },

      {
        label:"Listar",
        path:"/tablero/usuarios/listar"
      }
    ]
  }
];
const handleGetIcon =(icon)=>{
  switch(icon){
    case "HotelIcon":
      return <HotelIcon />;
    case "Manage":
      return <ManageSearchIcon />;
    case "Users":
      return <GroupIcon />;
    default:
      return <HotelIcon />;
  }
}
function LayoutAdminPage(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [menuOpen, setMenuOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavItem = (path) => {
    navigate(path);
  }

  const drawer = (
    <Box  sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => {handleNavItem(item.path)}}sx={{ textAlign: 'center' }}>
              <ListItemIcon>{handleGetIcon(item.icon)}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ width: menuOpen ? "80%" : "100%", ml: menuOpen ? "20%" : 0}}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: "auto"}}>
            <Button sx={{ color: '#fff' }}>
              Cerrar Sesion
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="persistent"
          open={menuOpen}
          onClose={handleDrawerToggle}
          sx={{
            width: menuOpen ? "20%" : "0%",
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width:"20%"},
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, width: menuOpen ? "80%" : "100%", ml: menuOpen ? "20%" : 0}}>
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

LayoutAdminPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default LayoutAdminPage;
