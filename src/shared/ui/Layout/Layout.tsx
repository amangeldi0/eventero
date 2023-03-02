import { ComponentPropsWithRef, FC } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './Layout.module.scss';

export const Layout: FC<ComponentPropsWithRef<'div'>> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
            className={classnames(cls.layout, {}, [className!])}
        >
            {children}
        </div>
    );
};
