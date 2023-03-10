import { FastSearch } from '@/features/FastSearch/FastSearch';
import { Layout } from '@/shared/ui/Layout/Layout';
import { EventsSwiper } from '@/widgets/Events/EventsSwiper';

import cls from './MainPage.module.scss';

const MainPage = () => (
    <div className={cls.mainPage}>
        <FastSearch />
        <Layout className={cls.layout}>
            <EventsSwiper title="Сегоня" />
            <EventsSwiper title="Завтра" />
            <EventsSwiper title="На этой неделе" />

        </Layout>
    </div>
);

export default MainPage;
