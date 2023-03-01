import { RouteProps } from 'react-router-dom';

import { AuthPage } from '@/pages/AuthPage';
import { MainPage } from '@/pages/MainPage';

export enum AppRoutes {
    MAIN = 'main',
    AUTH = 'auth'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.AUTH]: '/auth',
};

export const routingConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage />,
    },

};
