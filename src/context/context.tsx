import { createContext, ReactNode, useContext, useRef } from "react";




const ThemeContext = createContext<React.RefObject<HTMLDivElement> | null>(
  null
);

export function useHeight(){
    return useContext(ThemeContext)
}


export function HeightProvider({children}:{children : ReactNode}){
    const HeightSection = useRef<HTMLDivElement>(null)
    return (
        <ThemeContext.Provider value={HeightSection}>
            {children}
        </ThemeContext.Provider>
    )
}




