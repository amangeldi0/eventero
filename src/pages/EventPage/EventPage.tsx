import React from 'react';

import { Information } from '@/pages/EventPage/ui/Information';

import { Poster } from './ui/Poster';

import cls from './EventPage.module.scss';

export const EventPage = () => (
    <div className={cls.eventPage}>
        <div className={cls.eventPageContainer}>
            <Poster />
            <Information />
        </div>
    </div>
);
