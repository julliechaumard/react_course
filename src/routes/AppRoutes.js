import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Legal from '../pages/Legal';

function AppRoutes() {

    const routesConfig = [
        { path: "/", element: <Home /> },
        { path: "/mentions-legales", element: <Legal /> },
    ];


    const routes = (
    <Routes>
        {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
        ))}
    </Routes>
    );

    return routes;
}

export default AppRoutes;