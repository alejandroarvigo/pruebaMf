import React, { Suspense, useCallback, useMemo } from "react";

//@ts-ignores
const ShellContextProvider = React.lazy(() => import('menu/store'));
//@ts-ignores
const Menu = React.lazy(() => import('menu/App'));

const Button = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <ShellContextProvider object={{logFunction: () => console.log('valor actualizado')}}>
                <Menu />
            </ShellContextProvider>
        </Suspense>
    );
}

export default Button;