import { UserCircleIcon } from '@heroicons/react/24/outline';
import {
    ComponentPropsWithRef, FC, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';

import { Dropdown } from '@/features/Dropdown/Dropdown';
import { classnames } from '@/shared/helpers/classnames';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import cls from '../Navbar.module.scss';

export const User:FC<ComponentPropsWithRef<'div'>> = () => {
    const [active, setActive] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setActive(false));

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className={cls.User} ref={ref}>
            <Button
                theme={ButtonTheme.SIMPLE}
                className={cls.userButton}
                onClick={handleClick}
            >
                <UserCircleIcon />
            </Button>
            <Dropdown
                className={
                    classnames(cls.dropdown, { [cls.active]: active }, [])
                }
            >
                <Link
                    to="/favorites"
                >
                    Favorites
                </Link>
                <Link
                    to="/settings"
                >
                    Settings
                </Link>
                <Button
                    theme={ButtonTheme.SIMPLE}
                    className={cls.UserButton}

                >
                    Log out
                </Button>
            </Dropdown>
        </div>
    );
};
