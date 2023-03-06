import React from 'react';

import { Contacts } from '@/pages/EventPage/ui/Contacts';
import { Description } from '@/pages/EventPage/ui/Description';

import { Poster } from './ui/Poster';

import cls from './EventPage.module.scss';

export const EventPage = () => (
    <div className={cls.eventPage}>
        <div className={cls.eventPageContainer}>
            <Poster />
            <div className={cls.InfoContainer}>
                <Description />
                <Contacts />
            </div>
        </div>
    </div>
);
