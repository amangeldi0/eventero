import {
    BanknotesIcon,
    CalendarDaysIcon, MapPinIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

import ProfileImage from '@/shared/assets/Bar.avif';
import { ImageContainer } from '@/shared/ui/ImageContainer/ImageContainer';

import cls from '../EventPage.module.scss';

export const OrganizationCard = () => (
    <div className={cls.organizationCard}>

        <div className={cls.organizationProfile}>
            <ImageContainer className={cls.organizationImage} img={ProfileImage} />
            <div className={cls.organizationInfo}>
                <h1>Lepricon Bar</h1>
                <div className={cls.organizationContacts}>
                    <p>+996(704)-550-327</p>
                    <p>lepricon@gmail.com</p>
                </div>
                <Link className={cls.organizationLink} to="/organizationPage">
                    Посетить страницу
                </Link>
            </div>
        </div>

        <div className={cls.eventInfo}>
            <div className={cls.textWithIcon}>
                <BanknotesIcon className={cls.activeColorIcon} />
                <p>1500$</p>
            </div>
            <div className={cls.textWithIcon}>
                <CalendarDaysIcon className={cls.activeColorIcon} />
                <p>3-марта 14:30</p>
            </div>
            <div className={cls.textWithIcon}>
                <MapPinIcon className={cls.activeColorIcon} />
                <p>Ул. Киевская, 1/8</p>
            </div>
        </div>
    </div>
);
