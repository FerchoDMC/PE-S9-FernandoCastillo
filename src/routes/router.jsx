//archivo conde van a estar todas las rutas del proyecto
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage  from "../pages/Login";  
import Notfoundt from "../pages/NotFound"  
import DashboardPage from "../pages/Dashboard"
import HomePage from "../pages/Home"
import RegisterPage from "../pages/Register"

function RouterPages() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/ingreso" element={<LoginPage/>}/>
        <Route path="/tablero" element={<DashboardPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/registro" element={<RegisterPage/>}/>


        <Route path="*" element={<Notfoundt/>}/>


    </Routes>
    </BrowserRouter>
    )
}

export default RouterPages;