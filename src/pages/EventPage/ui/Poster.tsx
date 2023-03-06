import React from 'react';

import { BookmarkIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Event from '@/shared/assets/bakr.png';
import { classnames } from '@/shared/helpers/classnames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import cls from '@/pages/EventPage/EventPage.module.scss';

export const Poster = () => (
    <div className={cls.poster}>
        <Button
            theme={ButtonTheme.SIMPLE}
            className={cls.save}
        >
            <BookmarkIcon
                className={cls.saveIcon}
            />
        </Button>
        <div
            className={cls.ageLimit}
        >
            <span>18+</span>
        </div>
        <div
            className={cls.info}
        >
            <div
                className={cls.inlineText}
            >
                <p>Концерт</p>
            </div>
            <h1>Первый сольный концерт Bakr</h1>
            <div
                className={cls.mainInfo}
            >
                <div
                    className={cls.infoWithIcon}
                >
                    <CalendarDaysIcon className={cls.icon} />
                    <h4>
                        3-марта 14:30
                    </h4>
                </div>
                <div
                    className={cls.infoWithIcon}
                >
                    <MapPinIcon className={classnames(cls.icon, {}, [cls.map])} id={cls.Map} />
                    <h4>
                        Ул. Киевская, 1/8
                    </h4>
                </div>
            </div>
        </div>
        <img
            src={Event}
            alt="Oops"
        />
        <div
            className={cls.shadow}
        />
    </div>
);
