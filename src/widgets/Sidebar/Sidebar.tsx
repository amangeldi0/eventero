import { FC, useState } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { classnames } from '@/shared/helpers/classnames';
import { SidebarContent } from '@/widgets/Sidebar/ui/SidebarContent';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar:FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <div
            className={classnames(
                cls.sidebar,
                { [cls.collapsed]: collapsed },
                [className!],
            )}
        >
            <button
                type="button"
                className={cls.close}
                onClick={() => setCollapsed((prevState) => !prevState)}
            >
                <ChevronLeftIcon
                    className={classnames(
                        cls.closeIcon,
                        { [cls.collapsedIcon]: collapsed },
                    )}
                />
            </button>
            <div className={cls.sidebarContainer}>
                <SidebarContent />
            </div>
        </div>
    );
};
