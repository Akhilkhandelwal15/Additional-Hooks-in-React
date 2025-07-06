import { useContext } from "react";
import { ThemeContext, useThemeContext } from "./ThemeContext";

export const HomeComponent = ()=>{
    // const {theme, toggleTheme} = useContext(ThemeContext);
    const {theme, toggleTheme} = useThemeContext();
    const themeStyle = {
        backgroundColor: theme === "dark" ? "black" : "#fff",
        width: "500px",
        height: "200px",
    };
    return (
        <div style={themeStyle}>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
}