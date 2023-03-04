import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routingConfig } from '@/shared/config/routingConfig';

export const RoutePovider = () => (

    <Routes>
        {Object.values(routingConfig)
            .map(({ element, path }) => (
                <Route
                    key={path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            {element}
                        </Suspense>
                    )}
                    path={path}
                />
            ))}
    </Routes>
);
