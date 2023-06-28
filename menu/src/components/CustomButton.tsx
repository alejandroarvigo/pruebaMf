import React, { useContext } from "react";
import { ShellContext } from "../store";

const CustomButton = () => {
    const {logFunction} = useContext(ShellContext)

    return (
        <div className="container">
            <button onClick={logFunction}>APRETA EL BOTON2</button>
        </div>
    );
}

const WrapperCustomButton = ({store} : any) => {
    return(
        <ShellContext.Provider value={store}>
            <CustomButton />
        </ShellContext.Provider>
    )
}

export default WrapperCustomButton;