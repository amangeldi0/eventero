import { RouteProps } from 'react-router-dom';

import { AuthPage } from '@/pages/AuthPage';
import { EventPage } from '@/pages/EventPage/EventPage';
import { MainPage } from '@/pages/MainPage';

export enum AppRoutes {
    MAIN = 'main',
    AUTH = 'auth',
    EVENT = 'event'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.EVENT]: '/event',
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
    [AppRoutes.EVENT]: {
        path: RoutePath.event,
        element: <EventPage />,
    },
};
