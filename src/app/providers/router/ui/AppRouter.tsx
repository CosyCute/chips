import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

import { routeConfig } from '../config/routerConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} element={element} path={path} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
