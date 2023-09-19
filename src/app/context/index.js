'use client'

import { createContext, useState } from "react";


export const GlobalContext= createContext(null);


export default function GlobalState({children}){
    const [showNavModel,setShowNavModal]=useState(false);
    return <GlobalContext.Provider value={{showNavModel,setShowNavModal}} >{children}</GlobalContext.Provider>;
}