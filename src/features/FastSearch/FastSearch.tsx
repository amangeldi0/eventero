import { FC, useRef, useState } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { classnames } from '@/shared/helpers/classnames';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Layout } from '@/shared/ui/Layout/Layout';

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
        <div className={cls.container}>
            <Layout className={cls.layout}>
                <div className={cls.MainFilter}>
                    {mainChoices
                        .map((choice) => (

                            <div
                                key={choice}
                                className={cls.MainFilterChild}
                            >
                                <Button
                                    className={cls.MainFilterChildButton}
                                    theme={ButtonTheme.SIMPLE}
                                >
                                    {choice}
                                </Button>
                            </div>
                        ))}
                    <div className={cls.MainFilterChild}>
                        <Button
                            className={classnames(cls.AdditionalFilterChildButton, {}, [cls.MainFilterChildButtonAll])}
                            theme={ButtonTheme.SIMPLE}
                        >
                            ВСЕ
                        </Button>
                    </div>
                    <div className={cls.MainFilterChild} ref={ref}>
                        <Button
                            onClick={handleClick}
                            className={cls.MainFilterChildButton}
                            theme={ButtonTheme.SIMPLE}
                        >
                            <ChevronLeftIcon
                                className={
                                    classnames(cls.arrowIcon, { [cls.arrowIconActive]: active }, [])
                                }
                            />
                        </Button>
                    </div>
                </div>
                <div
                    className={
                        classnames(cls.AdditionalFilter, { [cls.active]: active }, [])
                    }
                >
                    {additionalChoices
                        .map((choice) => (
                            <div
                                key={choice}
                                className={cls.AdditionalFilterChild}
                            >
                                <Button
                                    className={cls.AdditionalFilterButton}
                                    theme={ButtonTheme.SIMPLE}
                                >
                                    {choice}
                                </Button>
                            </div>
                        ))}
                </div>
            </Layout>
        </div>

    );
};
