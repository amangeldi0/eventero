import { Navbar } from '@/widgets/Navbar/Navbar';

import { RoutePovider } from './providers/RoutePovider';

export const App = () => (
    <div className="app">
        <Navbar />
        <RoutePovider />
    </div>
);
