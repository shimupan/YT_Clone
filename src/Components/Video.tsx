import { Stack, Box } from "@mui/material";

import RenderVideo from "./RenderVideo";
import RenderChannel from "./RenderChannel";
import Loading from "./Loading";

const Video = ( {video, direction}:any ) => {
    if(!video) return <Loading/>;

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
            {video.map((item: any, index: number) => (
                <Box key={index}>
                    {/* Renders a video if theres a video ID, otherwise a Channel */}
                    {video[0].id.channelId != "UCpCipkY04Zq6A3mfFqeJLpQ" && item.id.videoId && <RenderVideo video={item}/>}
                    {item.id.channelId && <RenderChannel channel={item}/>}
                </Box>
            ))}

        </Stack>
    )
}

export default Video;