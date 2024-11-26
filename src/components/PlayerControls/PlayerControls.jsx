import { Stack, Typography, Slider, Box, IconButton } from "@mui/material";
import { formatTime } from "../../utils/formatTime";
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import { useState } from "react";




const PlayerControls = ({progress, is_paused, duration, player}) => {
    const skipStyle = {width: 28, height: 28};
    const playStyle = {width: 28, height: 28};

    return ( 
        <Stack direction={"column"} spacing={2} justify="center" alignItems="center" sx={{width: "100%"}}>
            <Stack spacing={1} direction="row" justifyContent={"center"} alignItems="center" sx={{width: "100%"}} > 
                <IconButton 
                size="small"
                 sx={{color: "text.primary"}} 
                 onClick={() => {
                    player.previousTrack(); // kan vara fek här! 
                 }} >
                    <SkipPrevious sx={skipStyle} />
                </IconButton>
                <IconButton size="small" sx={{color: "text.primary"}} >
                    {is_paused ? <PlayArrow sx={playStyle} /> : <Pause sx={playStyle} />}
                </IconButton>
                <IconButton size="small" sx={{color: "text.primary"}} >
                    <SkipNext sx={skipStyle} />
                </IconButton>
            
            </Stack>
            <Stack spacing={2} direction="row" justifyContent={"center"} alignItems={"center"} sx={{width: "75%"}} >
                <Typography sx={{color: "text.secondary", fontsize: 12}} >{formatTime(progress)}</Typography>
                <Slider max={duration} value={progress} min={0} size="medium" />
                <Typography sx={{color: "text.secondary", fontsize: 12}} >{formatTime(duration)}</Typography>


            </Stack>

        </Stack>
     );
}
 
export default PlayerControls;