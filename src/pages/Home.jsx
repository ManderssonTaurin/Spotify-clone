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
            <img src="/bild.JPG" alt="Alexander Mandersson" style={{maxWidth:"50%", maxHeight: "50%"}}/>
            <Button size="large"  variant="contained" href="https://www.youtube.com/watch?v=SQ-QVIOa_0o">Ansök nu!</Button>



        </Box>
     );
}
 
export default Home;