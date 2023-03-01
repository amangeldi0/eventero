import { ComponentPropsWithRef, FC } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    CONTAINED = 'contain'
}

interface ButtonProps extends ComponentPropsWithRef<'button'>{
    theme?: ButtonTheme
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme = ButtonTheme.CLEAR,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classnames(cls.button, {}, [className!, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
