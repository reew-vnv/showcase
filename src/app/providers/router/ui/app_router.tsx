import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/route_config/route_config';
import { PageLoader } from 'widgets/page_loader/ui/page_loader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={<div className="page-wrapper">{element}</div>}
                    path={path}
                />
            ))}
        </Routes>
    </Suspense>
);
