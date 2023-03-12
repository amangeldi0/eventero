import { Dropdown } from '@/widgets/SortDropdowns/ui/Dropdown';

import cls from './SortDropdowns.module.scss';

export const SortDropdowns = () => {
    const drop:string[] = ['ВЕЧЕРИНКИ', 'ОБРАЗОВАНИЕ', 'СПОРТ', 'ИГРЫ', 'ТЕАТР', 'СТЕНДАП'];
    const age:string[] = ['21+', '18+', '16+', '0+'];
    const audition:string[] = ['Для мужчин', 'Для женщин', 'Для всех'];
    const location:string[] = ['Квартира', 'Зал', 'Ресторан', 'Бар'];

    return (
        <div className={cls.sortDropdowns}>
            <Dropdown dropArray={drop} title="Категории" />
            <Dropdown dropArray={age} title="Возраст" />
            <Dropdown dropArray={audition} title="Аудитория" />
            <Dropdown dropArray={location} title="Локация" />
        </div>
    );
};
