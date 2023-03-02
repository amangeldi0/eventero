import example from '@/shared/assets/example.jpeg';
import { HeroIcon } from '@/shared/assets/HeroIcon';
import { classnames } from '@/shared/helpers/classnames';

import cls from './EventCard.module.scss';

export const EventCard = () => {
    const amanf = 'evnt';
    return (
        <div className={cls.eventCard}>
            <div className={cls.eventImage}>
                <img src={example} alt="exam" />
                <div className={cls.theme}>Concert</div>
                <div className={cls.price}>Price</div>
            </div>
            <HeroIcon className={cls.heart} />
            <div className={cls.eventInfo}>
                <div
                    className={cls.title}
                >
                    «Уровни художественного порядка» — персональная выставка Апанди Магомедова
                </div>
                <div className={cls.addition}>
                    <div className={cls.additionField}>
                        <span>Дата: </span>
                        20.12.2000
                    </div>
                    <div className={cls.additionField}>
                        <span>Для: </span>
                        Женщин
                    </div>
                    <div className={cls.additionField}>
                        <span>Возраст: </span>
                        18+
                    </div>
                    <div className={cls.additionField}>
                        <span>Адрес: </span>
                        Улица 123
                    </div>

                </div>
            </div>
        </div>
    );
};
