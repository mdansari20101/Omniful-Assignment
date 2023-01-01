import { useState } from "react";
import { createContext } from "react";

export const RouteContext = createContext();

const RouteContextProvider = ({children})=>{
    const [state,setState] = useState(null);
    function setStateContext(val){
        setState(val);
    }
    
    return (
        <RouteContext.Provider value={{state,setState,setStateContext}}>
            {children}
        </RouteContext.Provider>
    )

}
export default RouteContextProvider;