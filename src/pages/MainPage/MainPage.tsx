import { FastSearch } from '@/features/FastSearch/FastSearch';
import { Sidebar } from '@/widgets/Sidebar/Sidebar';

import cls from './MainPage.module.scss';

const MainPage = () => (
    <div className={cls.main}>
        <FastSearch/>
        <Sidebar />

    </div>

);

export default MainPage;
