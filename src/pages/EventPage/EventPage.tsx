import React from 'react';

import { Description } from '@/pages/EventPage/ui/Description';
import { Gallery } from '@/pages/EventPage/ui/Gallery';
import { IFrame } from '@/pages/EventPage/ui/IFrame';
import { OrganizationCard } from '@/pages/EventPage/ui/OrganizationCard';

import { Poster } from './ui/Poster';

import cls from './EventPage.module.scss';

export const EventPage = () => (
    <div className={cls.eventPage}>
        <Poster />

        <div className={cls.InfoContainer}>
            <Gallery />
            <OrganizationCard />
            <Description />
            <IFrame index="4nZfCpQPCVo" />
        </div>
    </div>
);
