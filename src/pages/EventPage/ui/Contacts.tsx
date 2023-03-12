import {
    CalendarDaysIcon, EnvelopeIcon, MapPinIcon, PhoneIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

import cls from '../EventPage.module.scss';

export const Contacts = () => (
    <div className={cls.information}>
        <h1>Lepricon Bar</h1>
        <div className={cls.container}>
            <div className={cls.eventInfo}>
                <div className={cls.infoWithIcon}>
                    <MapPinIcon className={cls.contactIcon} />
                    <p>
                        Ул. Киевская, 1/8
                    </p>
                </div>
                <div className={cls.infoWithIcon}>
                    <PhoneIcon className={cls.contactIcon} />
                    <p>
                        +996(704)-550-327
                    </p>
                </div>

            </div>
            <div className={cls.contacts}>
                <div className={cls.infoWithIcon}>
                    <CalendarDaysIcon className={cls.contactIcon} />
                    <p>
                        3-марта 14:30
                    </p>
                </div>
                <div className={cls.infoWithIcon}>
                    <EnvelopeIcon className={cls.contactIcon} />
                    <p>
                        lepricon@gmail.com
                    </p>
                </div>

            </div>
        </div>

    </div>
);
