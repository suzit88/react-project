import { createContext, useState } from 'react'

export const ContextParam = createContext({
    theme: "",
    toggleTheme: ()=>{}
})


//provider


export const ContextProvider = ({children})=>{
    const [theme,setTheme] = useState("light")

    const toggleTheme = ()=>{
        setTheme(prev => {
            if(prev === 'light') return "dark"
            return "light"
        })
    }
    return(
        <ContextParam.Provider value={{
            theme: theme,
            toggleTheme: toggleTheme
        }}>
            {children}
        </ContextParam.Provider>
    )
}