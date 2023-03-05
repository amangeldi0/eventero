import { FC, useState } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { classnames } from '@/shared/helpers/classnames';

import cls from './SideFilters.module.scss';

interface SideFiltersProps {
    filters: string[];
    collapse: boolean;
    title: string;
}

export const SideFilters: FC<SideFiltersProps> = (
    { filters, collapse, title },
) => {
    const [active, setActive] = useState<string>('');
    const [show, setShow] = useState<boolean>(true);

    const onToggle = (age: string) => {
        if (age === active) {
            setActive('');
        } else {
            setActive(age);
        }
    };

    return (
        <div className={cls.ratio}>
            <div
                role="presentation"
                className={classnames(cls.ratioTitle, { [cls.ratioTitleClose]: collapse })}
                onClick={() => setShow((prevState) => !prevState)}
            >
                {title}
                :
                <ChevronLeftIcon
                    className={
                        classnames(cls.arrow, { [cls.arrowHide]: !show })
                    }
                />
            </div>
            <div className={classnames(cls.radio, { [cls.hide]: !show })}>
                <div className={cls.type}>
                    {
                        filters.map((arg: string) => (
                            <button
                                type="button"
                                onClick={() => onToggle(arg)}
                                key={arg}
                                className={
                                    classnames(cls.value, { [cls.active]: active === arg })
                                }
                            >
                                {arg}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
