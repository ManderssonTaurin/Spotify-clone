import {Box, Button} from "@mui/material";

const Home = () => {
    return ( 
        <Box 
        sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gao: 5,

        }}>
            <img src="/bild.JPG" alt="Alexander Mandersson" style={{maxWidth:"50%", maxHeight: "50%", marginBottom: 16
            }}/>
            <Button size="large"  variant="contained" href="">Kontakta mig</Button>



        </Box>
     );
}
 
export default Home;