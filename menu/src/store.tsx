import React, { createContext, useCallback, useContext, useMemo } from "react";

interface ShellContextProviderProps {
    object: any
    children?: React.ReactNode;
}

interface InitialState {
    logFunction: () => void;
}

export const ShellContext = createContext<InitialState>({ logFunction: () => {console.log('asd')} });


export const ShellContextProvider: React.FC<ShellContextProviderProps> = ({ object, children }) => {


    return <ShellContext.Provider value={object}>{children}</ShellContext.Provider>

}

// export const useGetShellContext = () => useContext(ShellContext);

