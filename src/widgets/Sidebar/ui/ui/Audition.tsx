import { useState } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './SidebarUiStyles.module.scss';

export const Audition = () => {
    const [active, setActive] = useState<string>('');
    const [show, setShow] = useState<boolean>(true);

    const audition: string[] = ['Для женшин', 'Для мужшин', 'Для всех'];

    const onToggle = (aud: string) => {
        if (aud === active) {
            setActive('');
        } else {
            setActive(aud);
        }
    };

    return (
        <div className={cls.radioContainer}>
            <button
                type="button"
                className={cls.title}
                onClick={() => setShow((prevState) => !prevState)}

            >
                Аудитория:
            </button>
            <div className={classnames(cls.radio, { [cls.hide]: !show })}>
                <div className={cls.type}>
                    {
                        audition.map((aud: string) => (
                            <button
                                type="button"
                                className={classnames(cls.value, { [cls.active]: active === aud })}
                                onClick={() => onToggle(aud)}
                            >
                                {aud}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
