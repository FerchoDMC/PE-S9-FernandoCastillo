//archivo conde van a estar todas las rutas del proyecto
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage  from "../pages/Login";  
import Notfoundt from "../pages/NotFound"  
import DashboardPage from "../pages/Dashboard"
import HomePage from "../pages/Home"
import RegisterPage from "../pages/Register"
import SessionGuard from "./SessionGuard";
import AuthAdmin from "./AuthAdmin";
import RegisterHotelPage from "../pages/Admin/components/register.hotel";
import ListHotelsPage from "../pages/Admin/components/list.hotel";

function RouterPages() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/ingreso" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/registro" element={<RegisterPage/>}/>


        <Route path="*" element={<Notfoundt/>}/>

        //? Route Protected
        <Route 
            path="/tablero" 
            element={<AuthAdmin></AuthAdmin>}
        >
            //? = /tablero/registrohotel
            <Route path="registrohotel" element={<RegisterHotelPage/>}/>
            //? = /tablero/gestionhoteles
            <Route path="gestionhoteles" element={<ListHotelsPage/>}/>

        </Route>
    </Routes>
    
    </BrowserRouter>
    )
}

export default RouterPages;