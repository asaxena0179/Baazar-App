import {createContext,useState} from 'react'

export const LogContext = createContext(null);

export const LogProvider = (props) =>{
    const [log,setLog] = useState(false)
    return(
        <LogContext.Provider value={{log,setLog}}>
            {props.children}
        </LogContext.Provider>
    )
}
