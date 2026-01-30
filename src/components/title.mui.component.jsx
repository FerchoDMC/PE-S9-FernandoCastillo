import { Alert } from "@mui/material";

function TitleMui({title="titulo de pagina"}) {
    return(
        <>
            <Alert variant="outlined" severity="info" sx= {{width: "100%", my:3}} >
                {title}
            </Alert>
        </>
    )
}

export default TitleMui;