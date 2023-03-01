import React, { FC, JSXElementConstructor } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './Dropdowm.module.scss';

interface DropdownProps {
    children: any,
    active: boolean
}
const Dropdown:FC<DropdownProps> = ({ active, children }) => (

    <div className={classnames(cls.Dropdown, { active }, [])} />
);

export default Dropdown;
