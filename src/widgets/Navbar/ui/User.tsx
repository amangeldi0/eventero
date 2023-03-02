import React, {
    ComponentPropsWithRef, FC, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';

import { Dropdown } from '@/features/Dropdown/Dropdown';
import { UserIcon } from '@/shared/assets/UserIcon';
import { classnames } from '@/shared/helpers/classnames';
import { useClickOutside } from '@/shared/hooks/useClickOutside';

import cls from '@/widgets/Navbar/Navbar.module.scss';

export const User:FC<ComponentPropsWithRef<'div'>> = () => {
    const [active, setActive] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setActive(false));
    const handleClick = () => {
        setActive(!active);
    };
    return (
        <div className={cls.User} ref={ref}>
            {/* eslint-disable-next-line */}
            <button type="button" className={cls.userButton} onClick={handleClick}><UserIcon /></button>
            <Dropdown className={classnames(cls.dropdown, { [cls.active]: active }, [])}>
                <Link to="/favorites">Favorites</Link>
                <Link to="/settings">Settings</Link>
                <button type="button">Log out</button>
            </Dropdown>
        </div>
    );
};
