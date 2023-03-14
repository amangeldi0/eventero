import {
    BanknotesIcon, BookmarkIcon, CalendarDaysIcon, MapPinIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

import Event from '@/shared/assets/bakr.png';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { ImageContainer } from '@/shared/ui/ImageContainer/ImageContainer';

import cls from '@/pages/EventPage/EventPage.module.scss';

export const Poster = () => (
    <ImageContainer img={Event} className={cls.poster}>
        <Button
            theme={ButtonTheme.SIMPLE}
            className={cls.saveButton}
        >
            <BookmarkIcon
                className={cls.saveIcon}
            />
        </Button>
        <div className={cls.ageLimit}>
            18+
        </div>
        <div className={cls.posterInformation}>
            <div className={cls.posterCategoryName}>
                <p>Концерт</p>
            </div>
            <div className={cls.posterTitle}>Первый сольный концерт Bakr</div>
            <div className={cls.eventDetails}>
                <div className={cls.textWithIcon}>
                    <BanknotesIcon className={cls.whiteIcon} />
                    <p>
                        1500$
                    </p>
                </div>
                <div className={cls.textWithIcon}>
                    <CalendarDaysIcon className={cls.whiteIcon} />
                    <p>
                        3-марта 14:30
                    </p>
                </div>
                <div className={cls.textWithIcon}>
                    <MapPinIcon className={cls.whiteIcon} />
                    <p>
                        Ул. Киевская, 1/8
                    </p>
                </div>
            </div>
        </div>
        <div
            className={cls.posterShadow}
        />
    </ImageContainer>
);
