import React, { createContext, useCallback, useContext, useMemo } from "react";

interface ShellContextProviderProps {
    children?: React.ReactNode;
}

interface InitialState {
    logFunction: () => void;
}

export const ShellContext = createContext<InitialState>({ logFunction: () => {console.log('asd')} });


