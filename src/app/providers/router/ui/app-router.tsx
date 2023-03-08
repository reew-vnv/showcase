import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config/route-config';
import { PageLoader } from 'widgets/page-loader/ui/page-loader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/user';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => Object.values(routeConfig)
        .filter((route) => (!(route.authOnly && !isAuth))), [isAuth]);
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        element={<div className="page-wrapper">{element}</div>}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});
