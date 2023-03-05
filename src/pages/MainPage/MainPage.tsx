import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EventCard } from '@/features/EventCard/EventCard';
import { FastSearch } from '@/features/FastSearch/FastSearch';
import { Layout } from '@/shared/ui/Layout/Layout';
import { Sidebar } from '@/widgets/Sidebar/Sidebar';

import cls from './MainPage.module.scss';

const MainPage = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const space = collapsed ? -450 : -140;
    const slide = 4;
    return (
        <div className={cls.mainPage}>
            <FastSearch />
            <div className={cls.mainContainer}>
                <Sidebar
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />

                <Layout className={cls.e}>
                    <div className={cls.title}>В барах</div>
                    <Swiper
                        slidesPerView={slide}
                        spaceBetween={space}
                    >
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                    </Swiper>
                    <div className={cls.title}>На этой неделе</div>
                    <Swiper
                        slidesPerView={slide}
                        spaceBetween={space}
                    >
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                    </Swiper>
                    <div className={cls.title}>Спектакли</div>
                    <Swiper
                        slidesPerView={slide}
                        spaceBetween={space}
                    >
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                    </Swiper>
                    <div className={cls.title}>Спорт</div>
                    <Swiper
                        slidesPerView={slide}
                        spaceBetween={space}
                    >
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                        <SwiperSlide><EventCard /></SwiperSlide>
                    </Swiper>
                    <div className={cls.eventsContainer}>
                        {/* <div className={cls.eventsLayout}> */}
                        {/*    <EventCard /> */}
                        {/*    <EventCard /> */}
                        {/*    <EventCard /> */}
                        {/*    <EventCard /> */}
                        {/*    <EventCard /> */}
                        {/*    <EventCard /> */}
                        {/*    <EventCard /> */}
                        {/*    <EventCard /> */}
                        {/*    <EventCard /> */}
                        {/* </div> */}

                    </div>
                </Layout>

            </div>
        </div>
    );
};

export default MainPage;
