
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';


function ButtonMUI({name, onClick= () => {}, backgroundColor = 'white', color ='white', type='submit'}) {
    return (
        <>
            
            <Button 
                fullWidth
                type={type}
                onClick={onClick} 
                startIcon={<LoginIcon />} 
                variant= "contained"
                sx={{
                    color:color,
                    backgroundColor:backgroundColor
                }}
            > 
                {name} 
            </Button>

        </>
    );
}

export default ButtonMUI;