import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { classnames } from '@/shared/helpers/classnames';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { Button } from '@/shared/ui/Button/Button';
// import { Button } from '@/shared/ui/Button/Button';
import { Dropdown } from '@/widgets/SortDropdowns/ui/Dropdown';
import { FilterBar } from '@/widgets/SortDropdowns/ui/FilterBar';

import cls from './SortDropdowns.module.scss';

export const SortDropdowns = () => {
    const drop:string[] = ['ВЕЧЕРИНКИ', 'ОБРАЗОВАНИЕ', 'СПОРТ', 'ИГРЫ', 'ТЕАТР', 'СТЕНДАП'];
    const age:string[] = ['21+', '18+', '16+', '0+'];
    const audition:string[] = ['Для мужчин', 'Для женщин', 'Для всех'];
    const location:string[] = ['Квартира', 'Зал', 'Ресторан', 'Бар'];

    const media: boolean = useMediaQuery('(min-width: 768px)');
    const [filter, setFilter] = useState<boolean>(false);

    return (
        <div>
            {media ? (
                <div className={cls.sortDropdowns}>

                    <Dropdown dropArray={drop} title="Категории" />
                    <Dropdown dropArray={age} title="Возраст" />
                    <Dropdown dropArray={audition} title="Аудитория" />
                    <Dropdown dropArray={location} title="Локация" />
                </div>
            ) : (
                <div>
                    <div className={cls.sortFilter}>
                        <Button
                            className={cls.filterButton}
                        >
                            Дата
                        </Button>
                        <Button
                            onClick={() => setFilter(true)}
                            className={cls.filterButton}
                        >
                            <FunnelIcon className={cls.funnelIcon} />
                            Фильтр
                        </Button>
                    </div>
                    <div className={classnames(cls.filterSideBarCollapsed, { [cls.filterSideBar]: filter })}>
                        <div className={cls.sortFiltersContainer}>
                            <div className={cls.filterNavbar}>
                                <XMarkIcon
                                    onClick={() => setFilter(false)}
                                    className={cls.backIcon}
                                />
                            </div>
                            <div className={cls.sortFilters}>
                                <FilterBar dropArray={drop} title="Категории" />
                                <FilterBar dropArray={drop} title="Категории" />
                                <FilterBar dropArray={drop} title="Категории" />
                            </div>
                            {/* <Button className={cls.filter}>Отфильтровать</Button> если будет филтрация на одну кнопку */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
