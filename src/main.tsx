import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';

import '@/app/styles/index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
