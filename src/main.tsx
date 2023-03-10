import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/app/App';

import '@/app/styles/index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
