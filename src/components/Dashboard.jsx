import {Box} from "@mui/material"
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home.jsx"
import SideNav from "./SideNav/SideNav.jsx";
import {getAccessTokenFromStorage  } from "../utils/getAccessTokenFromStorage.js"
import { useEffect, useState } from "react";
import Playlist from "../pages/Playlist.jsx";
import Player from "./Player/Player.jsx";
import MobileNav from "./MobileNav/MobileNav.jsx";



const Dashboard = ({spotifyApi}) => {
    const [token, setToken] = useState(getAccessTokenFromStorage());

    useEffect(() => {
        async function onMount() {
            await spotifyApi.setAccessToken(token);
        }

        if(token) onMount();


    }, []);
    return ( 
        <Box sx={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}} >
            <Box sx={{flex: 1, overFlow: "auto", display: "flex"}} >
                <SideNav spotifyApi={spotifyApi} token={token}/>
                <Routes>
                    <Route path="/playlist/:id" element={<Playlist spotifyApi={spotifyApi} token={token} />} />
                    <Route path="/library" element={<div>Library</div>} />
                    <Route path="/" element={<Home/>} />


                </Routes>
                


            </Box>
            {token && <Player spotifyApi={spotifyApi} token={token}/>}
            <MobileNav/>
            

        </Box>
     );
}
 
export default Dashboard;