import { createContext, useContext, useState } from "react";

export const ThemeContext  = createContext();

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState("light");

    function toggleTheme(){
        setTheme((prev)=> prev==="dark"?"light":"dark");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

// custom hook
export const useThemeContext = ()=>{
    const context = useContext(ThemeContext);
    if(context===undefined){
        throw new Error("Component must be wrapped inside theme prvider");
    }
    return context;
}