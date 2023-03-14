import {
    BanknotesIcon,
    CalendarDaysIcon, MapPinIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

import ProfileImage from '@/shared/assets/Bar.avif';

import cls from '../EventPage.module.scss';

export const Contacts = () => (
    <div className={cls.organizationCard}>
        <div className={cls.organizationProfile}>
            <div className={cls.organizationImage}>
                <img src={ProfileImage} alt="hello" />
            </div>
            <div className={cls.organizationInfo}>
                <h1>Lepricon Bar</h1>
                <div className={cls.organizationContacts}>
                    <p>+996(704)-550-327</p>
                    <p>lepricon@gmail.com</p>
                </div>
                <div>
                    <a className={cls.organizationVisit} href="/">
                        Посетить страницу
                    </a>
                </div>
            </div>
        </div>

        <div className={cls.eventInfo}>
            <div className={cls.textWithIcon}>
                <BanknotesIcon className={cls.eventIcon} />
                <p>
                    1500$
                </p>
            </div>
            <div className={cls.textWithIcon}>
                <CalendarDaysIcon className={cls.eventIcon} />
                <p>
                    3-марта 14:30
                </p>
            </div>
            <div className={cls.textWithIcon}>
                <MapPinIcon className={cls.eventIcon} />
                <p>
                    Ул. Киевская, 1/8
                </p>
            </div>
        </div>
    </div>
);
