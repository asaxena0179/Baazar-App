import {createContext,useState} from 'react'

export const WishlistContext = createContext(null);

export const WishListProvider = (props) =>{
    const [wish,setWish] = useState([])
    return(
        <WishlistContext.Provider value={{wish,setWish}}>
            {props.children}
        </WishlistContext.Provider>
    )
}
