import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { LogoIcon } from '@/shared/assets/LogoIcon';
import { Layout } from '@/shared/ui/Layout/Layout';
import { AuthLink } from '@/widgets/Navbar/ui/AuthLink';
import { User } from '@/widgets/Navbar/ui/User';

import cls from './Navbar.module.scss';

export const Navbar: FC = () => {
    const location = useLocation();
    const jwt = localStorage.getItem('jwt');
    return (
        <Layout className={cls.layout}>
            <div className={cls.Navbar}>
                <Link to="/"><LogoIcon /></Link>
                {
                    location.pathname === '/auth' ? ''
                        : (
                            <div>
                                {
                                    jwt === null ? (
                                        <AuthLink />
                                    ) : (
                                        <User className={cls.userButton} />
                                    )
                                }
                            </div>
                        )
                }

            </div>
        </Layout>
    );
};
