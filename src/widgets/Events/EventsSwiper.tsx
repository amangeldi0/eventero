import { FC } from 'react';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EventCard } from '@/features/EventCard/EventCard';

import cls from './EventsSwiper.module.scss';

interface EventsSwiperProps {
    title: string;
}
export const EventsSwiper:FC<EventsSwiperProps> = ({ title }) => {
    const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className={cls.EventsSwiperContainer}>
            <div className={cls.EventsSwiperTitle}>{title}</div>
            <Swiper
                modules={[A11y]}
                slidesPerView="auto"
                spaceBetween={10}
                pagination={{ clickable: true }}

            >
                {exampleArray.map((slide) => (
                    <SwiperSlide key={slide} className={cls.EventsSwiperSlide}>
                        <EventCard />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
