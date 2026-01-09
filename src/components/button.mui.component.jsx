
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';


function ButtonMUI({name, onClick= () => {}, backgroundColor = 'white', color ='white'}) {
    return (
        <>
            
            <Button 
                type="submit"
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