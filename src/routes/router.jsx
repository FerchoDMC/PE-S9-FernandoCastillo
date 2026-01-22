//archivo conde van a estar todas las rutas del proyecto
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage  from "../pages/Login";  
import Notfoundt from "../pages/NotFound"  
import DashboardPage from "../pages/Dashboard"
import HomePage from "../pages/Home"
import RegisterPage from "../pages/Register"
import SessionGuard from "./SessionGuard";

function RouterPages() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/ingreso" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/registro" element={<RegisterPage/>}/>


        <Route path="*" element={<Notfoundt/>}/>

        {/* Ruta protegida por autenticación */}
        <Route 
            path="/tablero" 
            element={
                <SessionGuard childrenPage={<DashboardPage/>}/>
            }/>


    </Routes>
    
    </BrowserRouter>
    )
}

export default RouterPages;