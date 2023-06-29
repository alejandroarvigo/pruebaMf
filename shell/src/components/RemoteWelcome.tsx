import React, { Suspense } from "react";
// @ts-ignore
const Welcome: React.FC = React.lazy(() => import('menu/Welcome'));

const RemoteWelcome: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
        </Suspense>
    )
}

export default RemoteWelcome;