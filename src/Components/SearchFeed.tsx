import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Video from "./Video";
import { API } from "./Page";

const SearchFeed = () => {

    const { term } = useParams();
    const [videos, setVideos] = useState(null);

    // API call to fetch the videos
    useEffect(() => {
        setVideos(null);
    }, []);

    useEffect(() => {

        API(`search?part=snippet&q=${term}`)
        .then((data)=>{
            setVideos(data.items)
        })
    }, [term])

    // Display all of the searched videos
    return (
        <Box
        p={2}
        sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
            <Typography 
            variant="h4"
            fontWeight="bold"
            mb={2}
            ml={2}
            sx={{ color: "white" }}
            >
                Search Results for: <span style={{ color: "#FC1503" }}>{term}</span> Videos
            </Typography>
                
            {/* Video Component */}
            <Video video={videos}/>

        </Box>
    )
}

export default SearchFeed;