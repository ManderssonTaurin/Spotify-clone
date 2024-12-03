import { Box, List, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PlaylistItem from "../components/PlaylistItem/PlaylistItem";

const Library = ({spotifyApi, token}) => {

    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPlaylists() {

            if(!spotifyApi) return; 

            const data = await spotifyApi.getUserPlaylists();
            setPlaylists(data.body.items || []); // Default to empty array if items are missing
            setLoading(false);
            console.log(data.body.items)
        }
        getPlaylists()
    }, [spotifyApi, token]);

    const renderPlaylistItem = () => {
        if(loading) {
            return [1,2,3,4,5,6,7].map((e,i) => <PlaylistItem loading={loading} key={i} /> )
        }
        return playlists.map((playlist, i)=> <PlaylistItem loading={loading} key={i} {...playlist}/>)
    }

    return ( 
        <Box
        id="Library"
        px={3}
        sx={{
            display: {xs: "flex", md: "none"},
            backgroundColor: "background.default", 
            flex: 1, 
            flexDirection: "column", 
            overflowY: "auto"
        }}
        >
            <Typography py={3} sx={{color: "text.primary", fontSize: 30}}>
                Ditt bibliotek
            </Typography>
            <List>
                
                {renderPlaylistItem()}
            </List>

        </Box>
     );
}
 
export default Library;