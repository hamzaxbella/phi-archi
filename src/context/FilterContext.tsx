'use client'

import { createContext , useContext , useState } from "react";

interface FilterContextType {
    selectedFilter : string
    setSelectedFilter : (filter : string) => void
}

const Filtercontext = createContext<FilterContextType | undefined> (undefined)

export const FilterProvider = ({ children } : { children : React.ReactNode }) => {
    const [selectedFilter , setSelectedFilter] = useState<string>('')

    return (
        <Filtercontext.Provider value={{ selectedFilter , setSelectedFilter }}>
            {children}
        </Filtercontext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(Filtercontext)
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider')
    }
    return context;
}