import React from 'react';

import { PhoneIcon } from '@heroicons/react/24/outline';
import Instagram from '@/shared/assets/instagram.svg';
import Facebook from '@/shared/assets/square-facebook.svg';
import Telegram from '@/shared/assets/telegram.svg';

import cls from '../EventPage.module.scss';

export const Contacts = () => (
    <div className={cls.contacts}>
        <div className={cls.phone}>
            <PhoneIcon className={cls.phoneIcon} />
            <p>
                +996(704)55-03-27
            </p>
        </div>

        <div className={cls.links}>
            <img src={Instagram} alt="oops" />
            <img src={Telegram} alt="oops" />
            <img src={Facebook} alt="oops" />
        </div>

    </div>
);
