import React, { useState } from 'react';

import { Contacts } from '@/pages/EventPage/ui/Contacts';
import { Description } from '@/pages/EventPage/ui/Description';

import cls from '../EventPage.module.scss';

export const Information = () => (
    <div className={cls.InfoContainer}>
        <Description />
        <Contacts />
    </div>
);
