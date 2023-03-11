import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { SearchBar } from '@/features/SearchBar/SearchBar';
import { LogoIcon } from '@/shared/assets/LogoIcon';
import { classnames } from '@/shared/helpers/classnames';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { Layout } from '@/shared/ui/Layout/Layout';
import { ConditionRender } from '@/widgets/Navbar/ui/ConditionRender';

import cls from './Navbar.module.scss';

export const Navbar: FC = () => {
    const location = useLocation();
    const jwt = localStorage.getItem('jwt');
    const [search, setSearch] = useState<boolean>(false);
    const media = useMediaQuery('(min-width: 1200px)');

    return (
        <div className={cls.shadow}>
            <Layout className={cls.layout}>
                <div className={cls.Navbar}>
                    <Link to="/">
                        <LogoIcon className={cls.LogoIcon} />
                    </Link>
                    {media ? (
                        <>
                            <SearchBar
                                state={search}
                                setState={setSearch}
                            />
                            <ConditionRender
                                jwt={jwt!}
                                path={location.pathname}
                            />
                        </>
                    ) : (
                        <div className={cls.icons}>
                            <SearchBar
                                state={search}
                                setState={setSearch}
                                className={
                                    classnames(cls.hideSearch, { [cls.showSearch]: search }, [])
                                }
                            />
                            <ConditionRender
                                jwt={jwt!}
                                path={location.pathname}
                            />
                        </div>
                    )}
                </div>
            </Layout>
        </div>
    );
};
