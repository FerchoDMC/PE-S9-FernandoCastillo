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
import ListHotelsPage from "../pages/Admin/components/hotels";
import LayoutAdminPage from "../pages/Admin";

function RouterPages() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/ingreso" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/registro" element={<RegisterPage/>}/>
        


        <Route path="*" element={<Notfoundt/>}/>

        //? Route Protected
        <Route element={<AuthAdmin></AuthAdmin>}>

            <Route 
                path="/tablero" 
                element={<LayoutAdminPage></LayoutAdminPage>}
            >
                //? = /tablero/registrohotel
                <Route path="registrohotel" element={<RegisterHotelPage/>}/>
                //? = /tablero/gestionhoteles
                <Route path="gestionhoteles" element={<ListHotelsPage/>}/>
            </Route>            
        </Route>       
    </Routes>    
    </BrowserRouter>
    )
}

export default RouterPages;