import { Box, CardContent, CardMedia, Typography } from "@mui/material"; 
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { fillerProfilePicture } from "../public/icon";

const RenderChannel = ( {channel, marginTop }:any ) => {
    return (
        <Box
        sx={{ borderRadius: "20px", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              width: { xs: "350px", md: "320px"},
              margin: "auto",
              marginTop }}
        >
            <Link to={`/channel/${channel?.id?.channelId}`}>
                <CardContent 
                sx={{ display: "flex", 
                      flexDirection: "column", 
                      justifyContent: "center", 
                      textAlign: "center", 
                      color: "white"}}>
                    <CardMedia 
                    image={channel?.snippet?.thumbnails?.high?.url || fillerProfilePicture}
                    sx={{borderRadius: "50%", 
                         height: "180px", 
                         width: "180px", mb: 2, 
                         border: "1px solid #e3e3e3"}}
                    />
                    <Typography variant="h6">
                        {channel?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }}/>
                    </Typography>

                    { /* Render subscribers if availiable*/}

                    {channel?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default RenderChannel;