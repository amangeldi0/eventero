import { FC } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EventCard } from '@/features/EventCard/EventCard';
import { swiperMainBreakPoints } from '@/shared/constants/swiper/swiperLayout';

import cls from './EventsSwiper.module.scss';

interface EventsSwiperProps {
    title: string;
}
export const EventsSwiper:FC<EventsSwiperProps> = ({ title }) => {
    const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className={cls.EventsSwiper}>
            <div className={cls.EventsSwiperTitle}>{title}</div>
            <Swiper
                className={cls.swiper}
                freeMode
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                breakpoints={swiperMainBreakPoints}
            >
                {exampleArray.map((slide) => (
                    <SwiperSlide className={cls.swiperSlide} key={slide}>
                        <EventCard />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
