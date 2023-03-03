import { EventCard } from '@/features/EventCard/EventCard';
import { FastSearch } from '@/features/FastSearch/FastSearch';
import { SearchBar } from '@/features/SearchBar/SearchBar';
import { Sidebar } from '@/widgets/Sidebar/Sidebar';

import cls from './MainPage.module.scss';

const MainPage = () => (
    <div className={cls.mainPage}>
        <FastSearch />
        <div className={cls.mainContainer}>
            <Sidebar />
            <div className={cls.eventsContainer}>
                <SearchBar />
                <div className={cls.eventsLayout}>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />

                </div>

            </div>

        </div>
    </div>

);

export default MainPage;
