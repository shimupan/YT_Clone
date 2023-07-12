import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material"; 
import { CheckCircle } from "@mui/icons-material"

import { fillerChannelTitle, 
         fillerChannelUrl } from "../public/icon";

const RenderVideo = ( { video }:any ) => {

    const videoID = video.id.videoId;
    const videoInfo = video.snippet;

    return (

        <Card sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, borderRadius: "0"}}>

            {/* Renders the image */}
            <Link to={videoID ? `/video/${videoID}` : fillerChannelUrl}>
                <CardMedia 
                image={videoInfo?.thumbnails?.high?.url}
                sx={{ width: {xs:"100%", sm: "358px", md: "320px"}, height: 170}}
                />
            </Link>

            {/* Renders the title and channel*/}
            <CardContent sx={{ backgroundColor: "#1e1e1e", height: "50px" }}>
                <Link to={videoID ? `/video/${videoID}` : fillerChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="white">
                        {videoInfo?.title.slice(0,60) || fillerChannelTitle.slice(0,60)}
                    </Typography>
                </Link>

                <Link to={videoInfo?.channelId ? `/channel/${videoInfo?.channelId}` : fillerChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray">
                        {videoInfo?.channelTitle || fillerChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default RenderVideo;