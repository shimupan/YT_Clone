import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { GitHub, YT } from "../public/icon";

import SearchBar from "./SearchBar";

const NavigationBar = () => {
    return (
        <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between"}}
        >
        <Link to="/">
            <img src={YT} alt="YT Logo" height={45}/>
        </Link>

        <SearchBar/>

        <Link to="https://github.com/shimupan" target="_blank">
            <img src={GitHub} alt="Github Logo" height={45}/>
        </Link>
        </Stack>
    )
}

export default NavigationBar;