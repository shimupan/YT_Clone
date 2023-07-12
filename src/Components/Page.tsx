import { useState, useEffect } from "react"; 
import { Box, Stack, Typography } from "@mui/material";

import Sidebar from "./SideBar";
import Video from "./Video";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                  API                                                        //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import axios from 'axios';
import config from "../../config";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': config.YT3_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const API = async (url: any) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                  API                                                        //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Page = () => {

    const [currCategory, setCurrCategory] = useState("Recommended");

    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);
    }, []);

    useEffect(() => {

        API(`search?part=snippet&q=${currCategory}`)
        .then((data)=>{
            setVideos(data.items)
        })
    }, [currCategory])

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row"} }}>
            <Box sx={{ height: {sx: "auto", md: "100vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2}}}>
                
                {/* Sidebar Component */}
                <Sidebar
                    currCategory = {currCategory}
                    setCurrCategory = {setCurrCategory}
                />

                <Typography 
                className="github" 
                variant="body2" 
                sx={{ color: "#fff" }}>
                    Check out my GitHub!
                </Typography>
            </Box>

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
                    {currCategory} <span style={{ color: "#FC1503" }}>Videos</span>
                </Typography>
                
                {/* Video Component */}
                <Video video={videos}/>

            </Box>
        </Stack>
    )
}

export default Page;