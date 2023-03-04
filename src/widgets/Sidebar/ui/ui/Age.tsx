import { useState } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { classnames } from '@/shared/helpers/classnames';

import cls from './SidebarUiStyles.module.scss';

export const Age = () => {
    const [active, setActive] = useState<string>('');
    const [show, setShow] = useState<boolean>(true);

    const age: string[] = ['21+', '18+', '16+', 'Без ограничений'];

    const onToggle = (age: string) => {
        if (age === active) {
            setActive('');
        } else {
            setActive(age);
        }
    };
    return (
        <div className={cls.radioContainer}>
            <button
                type="button"
                className={cls.title}
                onClick={() => setShow((prevState) => !prevState)}

            >
                Возраст:
                <ChevronLeftIcon
                    className={
                        classnames(cls.arrow, { [cls.arrowHide]: !show })
                    }
                />
            </button>
            <div className={classnames(cls.radio, { [cls.hide]: !show })}>
                <div className={cls.type}>
                    {
                        age.map((ag: string) => (
                            <button
                                type="button"
                                onClick={() => onToggle(ag)}
                                className={
                                    classnames(cls.value, { [cls.active]: active === ag })
                                }
                            >
                                {ag}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
