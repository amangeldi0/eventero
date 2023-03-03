import { useState } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './SidebarUiStyles.module.scss';

export const Place = () => {
    const [active, setActive] = useState<string>('');
    const [show, setShow] = useState<boolean>(true);

    const place: string[] = ['Ресторан', 'Бар', 'Квартира', 'ТЦ', 'Парк', 'Клуб', 'Школа', 'Колледж', 'Другое'];

    const onToggle = (place: string) => {
        if (place === active) {
            setActive('');
        } else {
            setActive(place);
        }
    };
    return (
        <div className={cls.radioContainer}>
            <button
                type="button"
                className={cls.title}
                onClick={() => setShow((prevState) => !prevState)}

            >
                Локация:
            </button>
            <div className={classnames(cls.radio, { [cls.hide]: !show })}>
                <div className={cls.type}>
                    {
                        place.map((place: string) => (
                            <button
                                type="button"
                                className={classnames(cls.value, { [cls.active]: active === place })}
                                onClick={() => onToggle(place)}
                            >
                                {place}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
