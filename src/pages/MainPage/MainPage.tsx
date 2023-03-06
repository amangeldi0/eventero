import { Swiper, SwiperSlide } from 'swiper/react';

import { EventCard } from '@/features/EventCard/EventCard';
import { FastSearch } from '@/features/FastSearch/FastSearch';
import { Layout } from '@/shared/ui/Layout/Layout';

import cls from './MainPage.module.scss';

const MainPage = () => (
    <div className={cls.mainPage}>
        <FastSearch />
        <div
            className={cls.mainContainer}
        >

            <Layout
                className={cls.e}
            >
                <div
                    className={cls.title}
                >
                    В барах
                </div>
                <Swiper
                    className={cls.swiper}
                    slidesPerView={4}
                    spaceBetween={10}
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
            </Layout>

        </div>
    </div>
);

export default MainPage;
