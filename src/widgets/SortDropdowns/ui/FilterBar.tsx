import { XMarkIcon } from '@heroicons/react/24/outline';
import { FC, useState } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './FilterBar.module.scss';

interface FilterBarProps {
    dropArray: string[];
    title: string;
}
export const FilterBar:FC<FilterBarProps> = (props) => {
    const { dropArray, title } = props;

    const [select, setSelect] = useState<string>('');

    return (
        <div className={cls.filterBar}>
            <div className={cls.head}>
                <div className={cls.title}>{title}</div>
                <div
                    role="presentation"
                    onClick={() => setSelect('')}
                    className={cls.clear}
                >
                    Очистить
                    <XMarkIcon className={cls.xMarkIcon} />
                </div>
            </div>
            <div className={cls.filters}>
                {
                    dropArray.map((value) => (
                        <div
                            key={value}
                            role="presentation"
                            onClick={() => setSelect(value)}
                            className={classnames(cls.filter, { [cls.activeFilter]: select === value })}
                        >
                            {value}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
