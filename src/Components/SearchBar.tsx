import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const transfer = useNavigate();

    const handleSubmission = (e: any) => {
        e.preventDefault();
        
        if(searchTerm) {
            transfer(`/search/${searchTerm}`)
            setSearchTerm("");
        }
    }

    return (
        <Paper
        component="form"
        onSubmit={handleSubmission}
        sx={{ 
            borderRadius: 20, 
            border: "1px solid #e3e3e3", 
            pl:2, boxShadow: "none", 
            mr: { sm: 5}}}
        >
            <input
            className="search-bar"
            placeholder="..."
            value={searchTerm}
            onChange={(e) => {
                setSearchTerm(e.target.value)
            }}
            />
            <IconButton type="submit">
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar;