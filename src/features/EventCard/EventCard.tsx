import { HeartIcon } from '@heroicons/react/24/outline';
import example from '@/shared/assets/example.jpeg';

import cls from './EventCard.module.scss';

export const EventCard = () => (
    <div className={cls.eventCard}>
        <div className={cls.eventImage}>
            <img src={example} alt="exam" />
            <div className={cls.price}>Free</div>
        </div>
        <div className={cls.saveButton}>
            <HeartIcon className={cls.heart} />
        </div>
        <div className={cls.eventInfo}>
            <div className={cls.title}>
                «Уровни художественного порядка» — персональная выставка Апанди Магомедова
            </div>
            <div className={cls.description}>
                О любви словами русского романса — от эталонно-классического «Я Вас любил» до цыганского «Очи черные».
                <div className={cls.descriptionOverflow} />
            </div>
            <div className={cls.addition}>
                <div className={cls.additionField}>
                    <span>18+</span>
                </div>
                <div className={cls.additionField}>
                    20.12.2000
                </div>
            </div>
        </div>
    </div>
);
