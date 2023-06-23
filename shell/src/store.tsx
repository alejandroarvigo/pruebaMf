import React, { createContext, useCallback, useContext, useMemo } from "react";

interface ShellContextProviderProps {
    children?: React.ReactNode;
}

interface InitialState {
    logFunction: () => void;
}

const ShellContext = createContext<InitialState>({ logFunction: () => {console.log('asd')} });


export const ShellContextProvider: React.FC<ShellContextProviderProps> = ({ children }) => {

    const logFunction = useCallback(() => {
        console.log('Saludos desde el hosttingg')
    }, [])

    const value = useMemo(() => ({ logFunction }), [logFunction])

    return <ShellContext.Provider value={value}>{children}</ShellContext.Provider>

}

export const useGetShellContext = () => useContext(ShellContext);

