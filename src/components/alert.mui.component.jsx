import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

function AlertMui ({
    open = false, 
    handleClose = () => {},  
    title = null, 
    message = null,
    status = 'info',
}) {
    const handleGeticonbyStatus = ()=>{
        switch (status) {
            case 'warning':
                return <WarningAmberIcon color='warning' sx={{fontSize: 40}} />;    
            case 'error':
                return <ErrorOutlineIcon color='error' sx={{fontSize: 40}} />;
            case 'success':
                return <CheckCircleOutlineIcon color='success' sx={{fontSize: 40}} />;
            case 'info':
                return <InfoOutlineIcon color='info' sx={{fontSize: 40}} />;
            default:
                return <WarningAmberIcon color='warning' sx={{fontSize: 40}} />; 

        }
    }
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {title &&
                    <DialogTitle id="alert-dialog-title">
                        {title}
                    </DialogTitle>
                }
                <DialogContent>
                    {
                        handleGeticonbyStatus()
                    }
                    {message &&
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                    }
                </DialogContent>

                
            
            
            </Dialog>
        </>
    )
    
}

export default AlertMui;