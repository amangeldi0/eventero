import { FC } from 'react';

import { classnames } from '@/shared/helpers/classnames';
import { Age, Audition, Place } from '@/widgets/Sidebar/ui/ui';

import cls from './SidebarContent.module.scss';

interface SidebarContentProps {
    className?: string
}

export const SidebarContent:FC<SidebarContentProps> = ({ className }) => (
    <div className={classnames(cls.sidebarContent, {}, [className!])}>
        <Age />
        <Audition />
        <Place />
    </div>
);
