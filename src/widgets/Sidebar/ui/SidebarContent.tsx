import { FC } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './SidebarContent.module.scss';

interface SidebarContentProps {
    className?: string
}

export const SidebarContent:FC<SidebarContentProps> = ({ className }) => (
    <div className={classnames(cls.sidebarContent, {}, [className!])}>
        <div className={cls.radioContainer}>
            <div className={cls.radio}>
                <div className={cls.title}>Возраст:</div>
                <div className={cls.type}>
                    <div className={classnames(cls.value, {}, [cls.active])}>21+</div>
                    <div className={cls.value}>18+</div>
                    <div className={cls.value}>16+</div>
                    <div className={cls.value}>Без ограничений</div>
                </div>
            </div>
        </div>
        <div className={cls.radioContainer}>
            <div className={cls.radio}>
                <div className={cls.title}>Аудитория:</div>
                <div className={cls.type}>
                    <div className={classnames(cls.value, {}, [cls.active])}>Для женщин</div>
                    <div className={cls.value}>Для мужщин</div>
                    <div className={cls.value}>Для всех</div>
                </div>
            </div>
        </div>
        <div className={cls.radioContainer}>
            <div className={cls.radio}>
                <div className={cls.title}>Локация:</div>
                <div className={cls.type}>
                    <div className={classnames(cls.value, {}, [cls.active])}>Квартира</div>
                    <div className={cls.value}>Торговый центр</div>
                    <div className={cls.value}>Ресторан</div>
                    <div className={cls.value}>Другое</div>
                </div>
            </div>
        </div>
    </div>
);
