import { createContext ,useContext } from "react";

export const Themecomtext = createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})
export const ThemeProvider = Themecomtext.Provider

export default function useTheme () {
    return useContext(Themecomtext)
}