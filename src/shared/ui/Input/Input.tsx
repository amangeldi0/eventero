import { ComponentPropsWithRef, FC } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './Input.module.scss';

export enum InputTheme {
    OUTLINE = 'outline',
    LINE = 'line',
    STANDARD = 'standard',

}

interface InputProps extends ComponentPropsWithRef<'input'> {
    theme?: InputTheme;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        theme = InputTheme.STANDARD,
        ...otherProps
    } = props;

    return (
        <input
            className={classnames(cls.input, {}, [cls[theme], className!])}
            {...otherProps}
        />
    );
};
