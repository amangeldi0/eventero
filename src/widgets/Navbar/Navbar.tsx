import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { LogoIcon } from '@/shared/assets/LogoIcon';
import { UserIcon } from '@/shared/assets/UserIcon';
import { classnames } from '@/shared/helpers/classnames';

import cls from './Navbar.module.scss';

export const Navbar: FC = () => {
    const location = useLocation();
    const jwt = localStorage.getItem('jwt');

    return (
        <div className={classnames(cls.Navbar, {}, [])}>
            <Link to="/"><LogoIcon /></Link>
            {
                location.pathname === '/auth' ? ''
                    : (
                        <div>
                            {
                                jwt === null ? (
                                    <div className={cls.links}>
                                        <Link to="/auth">Authorize</Link>
                                    </div>
                                ) : (
                                // user in the home page and he is authorized
                                    <div className={classnames(cls.navigation, {}, [])}>
                                        <div className={classnames(cls.links, {}, [])}>
                                            <Link to="/favorites">Favorites</Link>
                                        </div>
                                        <button
                                            type="button"
                                            className={classnames(cls.userButton, {}, [])}
                                        >
                                            <UserIcon />
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    )
            }

        </div>
    );
};
