import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
export const columnsHotels = ({
    onDelete=()=>{}, 
    onEdit=()=>{}, 
    onView=()=>{}}) =>[
    {
        field: "id",
        headerName: "ID",
        width: 100

    },
    {
        field: "name",
        headerName: "Nombre",
        width: 300

    },
    {
        field: "address",
        headerName: "Direccion",
        width: 300

    },
    {
        field: 'stores',
        headerName: "Tiendas Disponibles",
        width: 300
    },
    {
        field: 'actions',
        headerName: "Acciones",
        width: 300,
        renderCell: (item) => (
            <>
                <Tooltip title="Eliminar Hotel" placement='top'>
                    <IconButton onClick={()=>onDelete(item.row.id)} aria-label="delete" size='small'>
                        <DeleteIcon  fontSize='small' color='error'/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Editar Hotel" placement='top'>
                    <IconButton onClick={()=>onEdit(item.row.id)} aria-label="edit" size='small'>
                        <EditSquareIcon fontSize='small' color='primary'/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Ver Hotel" placement='top'>
                    <IconButton onClick={()=>onView(item.row.id)} aria-label="delete" size='small'>
                        <VisibilityIcon fontSize='small' color='success'/>
                    </IconButton>
                </Tooltip>
            </>
        )      
    },
]
