import { BookmarkIcon } from '@heroicons/react/24/outline';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import bakr from '@/shared/assets/bakr.png';

import cls from './EventCard.module.scss';

export const EventCard = () => {
    const navigate = useNavigate();

    const goEventPage = () => {
        navigate('/event');
    };

    const addFavourite = (e: MouseEvent<SVGElement>) => {
        e.stopPropagation();
    };

    return (
        <div
            role="presentation"
            className={cls.eventCard}
            onClick={goEventPage}
        >
            <div
                className={cls.eventImage}
            >
                <img
                    src={bakr}
                    alt="eventPhoto"
                />
                <div
                    className={cls.price}
                >
                    Free
                </div>
            </div>
            <div
                className={cls.saveButton}
            >
                <BookmarkIcon
                    className={cls.bookmarkIcon}
                    onClick={addFavourite}
                />
            </div>
            <div
                className={cls.eventInfo}
            >
                <div
                    className={cls.title}
                >
                    <h3>Первый сольный концерт Bakr</h3>
                </div>
                <div
                    className={cls.description}
                >
                    3 марта на сцене Bishkek Arena состоит первый большой live-концерт исполнителя Bakr в родном городе. Он за короткий срок сумел стать неотъемлемой частью музыкальной индустрии. Начиная с первых треков Bakr прорывается на лидирующие строчки хит-парадов, его треки попадают в мировой чарт Shazam и занимают лидирующие позиции во всех чартах России и Азии. Лиричные мотивы, драйвовый речитатив, танцевальный бит в купе с потрясающей энергетикой артиста и живыми инструментами образуют гремучую смесь , которая разорвет сердце каждого зрителя на концерте Бакра. Не упустите возможность стать частью этого большого праздника любви к музыке!
                    <div
                        className={cls.descriptionOverflow}
                    />
                </div>
                <div
                    className={cls.addition}
                >
                    <div
                        className={cls.additionField}
                    >
                        <span>18+</span>
                    </div>
                    <div
                        className={cls.additionField}
                    >
                        20.12.2000
                    </div>
                </div>
            </div>
        </div>
    );
};
