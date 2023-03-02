import { FC, ReactNode } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './Dropdowm.module.scss';

interface DropdownProps {
    children: ReactNode,
    active: boolean
}
export const Dropdown:FC<DropdownProps> = ({ active, children }) => (

    <div
        className={classnames(cls.Dropdown, { active }, [])}
    >
        {children}
    </div>
);
