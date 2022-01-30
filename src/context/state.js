import React,{useState, createContext} from "react";


export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [login, setLogin] = useState(true);

    const 

     return(
        <AppContext.Provider value={{login}}>
           {children}
        </AppContext.Provider>
    )
}

