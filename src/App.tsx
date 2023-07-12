import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import NavigationBar from "./Components/NavigationBar";
import Page from "./Components/Page";
import DisplayVideo from "./Components/DisplayVideo";
import Channel from "./Components/Channel";
import SearchFeed from "./Components/SearchFeed";

const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{backgroundColor: "#000"}}>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={ <Page/> }></Route>
                    <Route path="/video/:id" element={ <DisplayVideo/> }></Route>
                    <Route path="/channel/:id" element={ <Channel/> }></Route>
                    <Route path="/search/:term" element={ <SearchFeed/> }></Route>
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App;