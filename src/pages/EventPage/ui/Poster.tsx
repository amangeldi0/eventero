import {
    BanknotesIcon, BookmarkIcon, CalendarDaysIcon, MapPinIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

import Event from '@/shared/assets/bakr.png';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import cls from '@/pages/EventPage/EventPage.module.scss';

export const Poster = () => (
    <div className={cls.poster}>
        <Button
            theme={ButtonTheme.SIMPLE}
            className={cls.saveButton}
        >
            <BookmarkIcon
                className={cls.saveIcon}
            />
        </Button>
        <div className={cls.ageLimit}>
            <span>18+</span>
        </div>
        <div className={cls.posterInformation}>
            <div className={cls.posterCategoryName}>
                <p>Концерт</p>
            </div>
            <div className={cls.posterTitle}>Первый сольный концерт Bakr</div>
            <div className={cls.posterDetails}>
                <div className={cls.textWithIcon}>
                    <BanknotesIcon className={cls.icon} />
                    <p>
                        1500$
                    </p>
                </div>
                <div className={cls.textWithIcon}>
                    <CalendarDaysIcon className={cls.icon} />
                    <p>
                        3-марта 14:30
                    </p>
                </div>
                <div className={cls.textWithIcon}>
                    <MapPinIcon className={cls.icon} />
                    <p>
                        Ул. Киевская, 1/8
                    </p>
                </div>
            </div>
        </div>
        <img
            className={cls.posterImage}
            src={Event}
            alt="Oops"
        />
        <div
            className={cls.posterShadow}
        />
    </div>
);
