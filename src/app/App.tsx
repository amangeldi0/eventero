import { Navbar } from '@/widgets/Navbar/Navbar';

import { RoutePovider } from './providers/RoutePovider';

export const App = () => {
    localStorage.setItem('jwt', 'something');
    return (
        <div className="app">
            <Navbar />
            <RoutePovider />
        </div>
    );
};
