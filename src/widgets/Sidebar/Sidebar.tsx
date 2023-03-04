import { FC, useState } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { classnames } from '@/shared/helpers/classnames';
import { SideFilters } from '@/widgets/Sidebar/ui/SideFilters';

import 'react-datepicker/dist/react-datepicker.css';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar:FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const age: string[] = ['21+', '18+', '16+', 'Без ограничений'];
    const audition: string[] = ['Для женшин', 'Для мужшин', 'Для всех'];
    const place: string[] = ['Ресторан', 'Бар', 'Квартира', 'ТЦ', 'Парк', 'Клуб', 'Школа', 'Колледж', 'Другое'];

    return (
        <div
            className={classnames(
                cls.sidebar,
                { [cls.collapsed]: collapsed },
                [className!],

            )}
        >
            <div
                role="presentation"
                onClick={
                    () => setCollapsed(
                        (prevState) => !prevState,
                    )
                }
                className={cls.close}
            >
                <ChevronLeftIcon
                    className={
                        classnames(
                            cls.closeIcon,
                            { [cls.collapsedIcon]: collapsed },
                        )
                    }
                />
            </div>

            <div className={cls.sidebarContainer}>
                <SideFilters
                    filters={age}
                    collapse={collapsed}
                    title="Возрраст"
                />
                <SideFilters
                    filters={audition}
                    collapse={collapsed}
                    title="Аудитория"
                />
                <SideFilters
                    filters={place}
                    collapse={collapsed}
                    title="Локация"
                />
            </div>
        </div>
    );
};
