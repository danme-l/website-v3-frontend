import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Tooltip
            title={"Toggle theme"}
            placement="bottom"
            TransitionComponent={Zoom}
        >
            <IconButton
                color="inherit"
                onClick={toggleTheme}
                aria-label={"Toggle theme"}
            >
                {theme === "light" ? (
                    <Brightness4 />
                ) : (
                    <Brightness7 />
                )}
            </IconButton>
        </Tooltip>
    );
};
