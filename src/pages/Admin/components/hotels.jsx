import { useEffect } from "react";
import TableMui from "../../../components/table.mui.components.jsx";
import TitleMui from "../../../components/title.mui.component.jsx";
import { useState } from "react";
import { columnsHotels } from "../../../utils/columnTable.jsx";
import { GetHotels } from "../../../utils/hotel.js";
import AlertMui from "../../../components/alert.mui.component.jsx";

function ListHotelsPage() {

    const [listHotels, setListHotels] = useState([]);
    const [stateAlert, setStateAlert] = useState({ 
        open: false,
        title:"",
        message: null,
        type: "info" 
    });


    const handleGetHotels = () => {

        const hotels = GetHotels();
        setListHotels(hotels);

    }

    const handleCloseAlert = () => {
        setStateAlert({ open: false });
    }

    const handleEditHotel = (id) => {
        alert("editar Hotel" + id)
    }

    const handleDeleteHotel = (id) => {
        setStateAlert({
            ...stateAlert,
            open: true,
            message: "¿Estas seguro de eliminar el hotel?",
            status: "info"
        })
        alert("eliminar Hotel" + id)
    }

    const handleViewHotel = (id) => {
        alert("ver Hotel" + id)
    }

    useEffect(() => {
        handleGetHotels();
    }, []);

    return (
        <>
            <AlertMui
                open={stateAlert.open}
                onClose={handleCloseAlert}
                message={stateAlert.message}
                status={stateAlert.status}
            />
            <TitleMui
                title="Lista de Hoteles"
            />
            <TableMui
                columns={columnsHotels({
                    onDelete: handleDeleteHotel,
                    onEdit: handleEditHotel,
                    onView: handleViewHotel
                })}
                rows={listHotels}
            />
        </>
    )
}

export default ListHotelsPage;
