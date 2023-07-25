import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Video from "./Video";
import RenderChannel from "./RenderChannel";

import { API } from "./Page";

const Channel = (  ) => {
    
    const { id } = useParams();

    const [channelID, setChannelID] = useState(null);
    const [videos, setVideos] = useState(null);

    useEffect(()=>{
        API(`channels?part=snippet&id=${id}`)
        .then((data) => {
            setChannelID(data?.items[0]);
        })

        API(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => {
            setVideos(data?.items);
        })
    }, [id])
    
    return (
        <Box minHeight="100vh">
            <Box>
                <div style={{
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 
                zIndex: 10,
                height: "300px"}}
                />
                <RenderChannel channel={channelID} marginTop="-100px"/>
            </Box>
            <Box display= "flex" p= "2">
                <Box sx={{ mr: { sm: "100px"} }}/>
                <Video video={videos}/>
            </Box>
        </Box>
    )
}

export default Channel;