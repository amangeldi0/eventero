import {
    CalendarDaysIcon, EnvelopeIcon, MapPinIcon, PhoneIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

import cls from '../EventPage.module.scss';

export const Contacts = () => (
    <div className={cls.detailsContainer}>
        <h1>Lepricon Bar</h1>
        <div className={cls.detailsLayout}>
            <div className={cls.eventDetails}>
                <div className={cls.textWithIcon}>
                    <MapPinIcon className={cls.contactIcon} />
                    <p>
                        Ул. Киевская, 1/8
                    </p>
                </div>
                <div className={cls.textWithIcon}>
                    <CalendarDaysIcon className={cls.contactIcon} />
                    <p>
                        3-марта 14:30
                    </p>
                </div>
            </div>
            <div className={cls.contactDetails}>
                <div className={cls.textWithIcon}>
                    <PhoneIcon className={cls.contactIcon} />
                    <p>
                        +996(704)-550-327
                    </p>
                </div>

                <div className={cls.textWithIcon}>
                    <EnvelopeIcon className={cls.contactIcon} />
                    <p>
                        lepricon@gmail.com
                    </p>
                </div>

            </div>
        </div>

    </div>
);
