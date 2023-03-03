import { FC, useRef, useState } from 'react';

import { ArrowIcon } from '@/shared/assets/ArrowIcon';
import { classnames } from '@/shared/helpers/classnames';
import { useClickOutside } from '@/shared/hooks/useClickOutside';

import cls from './FastSearc.module.scss';

export const FastSearch:FC = () => {
    const mainChoices = ['ВЕЧЕРИНКИ', 'КОНЦЕРТЫ', 'В РЕСТОРАНАХ', 'В БАРАХ', 'ОБРАЗОВАНИЕ', 'АРТ', 'СПОРТ', 'БЕСПЛАТНОЕ', 'ДЛЯ ДЕТЕЙ', 'ДЛЯ ЖЕНЩИН'];
    const additionalChoices = ['КВИЗЫ', 'ТЕАТР', 'СТЕНДАП', 'НОЧНЫЕ КЛУБЫ', 'ВЫСТАВКИ', 'ТАНЦЫ', 'КАРАОКЕ', 'МАГАЗИНЫ', 'ЭКСКУРСИИ', 'ФОТОГРАФИЯ', 'КРАСОТА', 'МОДА И СТИЛЬ', 'ФЕСТИВАЛИ', 'ЯРМАРКИ', 'ПРЕЗЕНТАЦИИ', 'КИНО', 'ГРАЖДАНСКИЕ ИНИЦИАТИВЫ', 'БИЗНЕС', 'IT'];

    const [active, setActive] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setActive(false));
    const handleClick = () => {
        setActive(!active);
    };
    return (
        <div className={cls.shadow}>
            <div className={cls.layout}>
                <div className={cls.MainFilter}>
                    {mainChoices.map((choice, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={index} className={cls.MainFilterChild}>
                            <button type="button">{choice}</button>
                        </div>
                    ))}
                    <div className={cls.MainFilterChild}><button type="button">ВСЕ</button></div>
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <div className={cls.MainFilterChild} ref={ref}><button type="button" onClick={handleClick}><ArrowIcon className={classnames(cls.arrowIcon, { [cls.arrowIconActive]: active }, [])} /></button></div>
                </div>
                <div className={classnames(cls.AdditionalFilter, { [cls.active]: active }, [])}>
                    {additionalChoices.map((choice, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={index} className={cls.AdditionalFilterChild}>
                            <button type="button" className={cls.AdditionalFilterButton}>{choice}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};
