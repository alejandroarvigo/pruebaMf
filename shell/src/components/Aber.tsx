import React from "react";
import { Suspense } from "react";

//@ts-ignores
const Menu = React.lazy(() => import('menu/App'));

const Aber = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Menu />
        </Suspense>
    );
}

export default Aber;