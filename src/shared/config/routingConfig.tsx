import { RouteProps } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';

export enum AppRoutes {
    MAIN = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
};

export const routingConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },

};
