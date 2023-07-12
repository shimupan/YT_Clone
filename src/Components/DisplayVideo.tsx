import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Stack, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import Video from "./Video";
import Loading from "./Loading";
import { API } from "./Page";

const DisplayVideo = () => {
    
    const { id } = useParams();
    
    const [currVideo, setCurrVideo] = useState(null);
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        API(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => {
            setCurrVideo(data.items[0]);
        })

        API(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => {
            setVideos(data.items)
        })
    }, [id])

    if(!(currVideo as any)) return <Loading/>;
    console.log(currVideo);

    return (
        <Box minHeight="100vh">
            <Stack direction={{xs: "column", md: "row"}}>
                <Box flex={1}>
                    <Box sx={{ width: "100%", position: "sticky" }}>

                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
                        className="react-player" controls/>

                        <Typography color= "white" variant= "h6" fontWeight= "bold" p={2}>
                            {currVideo.snippet.title}
                        </Typography>

                        <Stack direction="row" justifyContent="space-between" sx={{ color:"white" }} py={1} px={2}>
                            <Link to={`/channel/${currVideo.snippet.channelId}`}>
                                <Typography variant={{sm: "subtitle1", md: "h6"}} color="white">
                                    {currVideo.snippet.channelTitle}
                                    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px"}}/>
                                </Typography>
                            </Link>

                            <Stack direction="row" gap={2}>

                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(currVideo.statistics.viewCount).toLocaleString()} Views
                                </Typography>

                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(currVideo.statistics.likeCount).toLocaleString()} Likes
                                </Typography>

                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{ overflow: "auto" }}>
                    <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
                        <Video video={videos} direction="column"/>
                    </Box>
                </Box>

            </Stack>

        </Box>
    )
}

export default DisplayVideo;