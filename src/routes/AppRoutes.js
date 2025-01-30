import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Legal from '../pages/Legal';
import Exercice1 from '../pages/Exercice1';
import Exercice2 from '../pages/Exercice2';
import Exercice3 from '../pages/Exercice3';
import Exercice4 from '../pages/Exercice4';
import Exercice5 from '../pages/Exercice5';
import Exercice6 from '../pages/Exercice6';

function AppRoutes() {

    const routesConfig = [
        { path: "/", element: <Home /> },
        { path: "/mentions-legales", element: <Legal /> },
        { path: "/exercice-1", element: <Exercice1 /> },
        { path: "/exercice-2", element: <Exercice2 /> },
        { path: "/exercice-3", element: <Exercice3 /> },
        { path: "/exercice-4", element: <Exercice4 /> },
        { path: "/exercice-5", element: <Exercice5 /> },
        { path: "/exercice-6", element: <Exercice6 /> }
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