import { ComponentPropsWithRef, FC } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './ImageContainer.module.scss';

interface ImageContainerProps extends ComponentPropsWithRef<'div'>{
    img:string
}
export const ImageContainer:FC<ImageContainerProps> = (props) => {
    const {
        className,
        img,
        children,
    } = props;
    return (
        <div
            className={classnames(cls.imageContainer, {}, [className!])}
            style={{ backgroundImage: `url(${img})` }}
        >
            {children}
        </div>
    );
};
