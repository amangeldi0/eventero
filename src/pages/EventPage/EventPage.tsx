import React from 'react';

import Poster from '@/shared/assets/event.jpg';

import cls from './EventPage.module.scss';

export const EventPage = () => (
    <div className={cls.eventPage}>
        <div className={cls.eventPageContainer}>
            <div className={cls.poster}>
                <div className={cls.info}>
                    <div className={cls.inlineText}>
                        <p>Концерт</p>
                        <span>18+</span>
                    </div>
                    <h1>Первый сольный концерт Bakr</h1>
                    <h4>Ул. Киевская, 1/8</h4>
                    <h4>3-марта 14:30</h4>
                </div>
                <img src={Poster} alt="Oops" />
                <div className={cls.shadow} />
            </div>
        </div>
    </div>
);
