import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { SearchBar } from '@/features/SearchBar/SearchBar';
import { LogoIcon } from '@/shared/assets/LogoIcon';
import { Layout } from '@/shared/ui/Layout/Layout';
import { AuthLink } from '@/widgets/Navbar/ui/AuthLink';
import { User } from '@/widgets/Navbar/ui/User';

import cls from './Navbar.module.scss';

export const Navbar: FC = () => {
    const location = useLocation();
    const jwt = localStorage.getItem('jwt');
    return (
        <div className={cls.shadow}>
            <Layout className={cls.layout}>
                <div className={cls.Navbar}>
                    <Link to="/">
                        <LogoIcon className={cls.LogoIcon} />
                    </Link>
                    {location.pathname === '/auth'
                        ? '' : <SearchBar />}
                    {
                        location.pathname === '/auth' ? ''
                            : (
                                <div>
                                    {
                                        jwt === null ? (
                                            <AuthLink />
                                        ) : (
                                            <User
                                                className={
                                                    cls.userButton
                                                }
                                            />
                                        )
                                    }
                                </div>
                            )
                    }

                </div>
            </Layout>
        </div>
    );
};
