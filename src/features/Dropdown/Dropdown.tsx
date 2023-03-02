import { ComponentPropsWithRef, FC, ReactNode } from 'react';

import { classnames } from '@/shared/helpers/classnames';

import cls from './Dropdowm.module.scss';

interface DropdownProps extends ComponentPropsWithRef<'div'>{
    children: ReactNode[]
}
export const Dropdown:FC<DropdownProps> = (props) => {
    const {
        children,
        className,
    } = props;
    console.log(children);
    return (
        <div className={classnames(cls.Drop, {}, [className!])}>
            {children.map(
                (child, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index} className={cls.child}>
                        {child}
                    </div>
                ),
            )}
        </div>
    );
};
