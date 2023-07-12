import { Stack } from "@mui/material"
import { categories } from "../public/icon.tsx";

const Sidebar = ( {currCategory, setCurrCategory}:any ) => {
    return (
        <Stack
        direction="row"
        sx={{overflowY: "auto", height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" }}}
        >
            {categories.map((category) => (
                <button 
                className="category"
                onClick={() => setCurrCategory(category.name)}
                style={{ background: category.name === currCategory ? "#FC1503" : "#000", color: "white" }}
                key={category.name}>
                    {/* Render Icons */}
                    <span style={{ color: category.name === currCategory ? "white" : "red", marginRight: "10px"}}>
                                {category.icon}
                    </span>
                    {/* Render Icons name */}
                    <span style={{ opacity: category.name === currCategory ? "1" : "0.5"}}>
                        {category.name}

                    </span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar;