import { Stack, Typography, Slider, Box, IconButton } from "@mui/material";
import { formatTime } from "../../utils/formatTime";
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import { useEffect, useState } from "react";




const PlayerControls = ({progress, is_paused, duration, player}) => {
    //har inte tagit med progress i usestate! 
    const [currentProgress, setCurrentProgress] = useState(progress); 
    const skipStyle = {width: 28, height: 28};
    const playStyle = {width: 28, height: 28};

    useEffect(()=> {

        const intervalID = setInterval(()=> {
            if(!is_paused && player) {
                setCurrentProgress((prevState)=> prevState + 1);
            }
        }, 1000);
        return () => clearInterval(intervalID);

    },[is_paused, player])

    useEffect(()=> {
        setCurrentProgress(progress);

        

    },[progress]);

    return ( 
        <Stack direction={"column"} spacing={2} justify="center" alignItems="center" sx={{width: "100%"}}>
            <Stack spacing={1} direction="row" justifyContent={"center"} alignItems="center" sx={{width: "100%"}} > 
                <IconButton 
                size="small"
                 sx={{color: "text.primary"}} 
                 onClick={() => {
                    setCurrentProgress(0);
                    player.previousTrack(); // kan vara fek här! 
                 }} >
                    <SkipPrevious sx={skipStyle} />
                </IconButton>
                <IconButton size="small" sx={{color: "text.primary"}} 
                 onClick={() => {
                    player.togglePlay(); 
                 }}
                
                >
                    {is_paused ? <PlayArrow sx={playStyle} /> : <Pause sx={playStyle} />}
                </IconButton>
                <IconButton 
                size="small" 
                sx={{color: "text.primary"}} 
                onClick={() => {
                    setCurrentProgress(0);
                    player.nextTrack(); 
                 }}
                
                
                >
                    <SkipNext sx={skipStyle} />
                </IconButton>
            
            </Stack>
            <Stack spacing={2} direction="row" justifyContent={"center"} alignItems={"center"} sx={{width: "75%"}} >
                <Typography sx={{color: "text.secondary", fontsize: 12}} >{formatTime(currentProgress)}</Typography>
                <Slider 
                max={duration} 
                value={currentProgress} 
                min={0} 
                size="medium" 
                onChange={(event, value) => {
                    console.log("Changed", value);
                    setCurrentProgress(value);

                }}
                onChangeCommitted={(event, value) => {
                    player.seek(value * 1000);
                }}
                
                
                />
                <Typography sx={{color: "text.secondary", fontsize: 12}} >{formatTime(duration)}</Typography>


            </Stack>

        </Stack>
     );
}
 
export default PlayerControls;