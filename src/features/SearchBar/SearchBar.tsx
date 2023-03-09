import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { classnames } from '@/shared/helpers/classnames';
import { Layout } from '@/shared/ui/Layout/Layout';

import cls from './SearchBar.module.scss';

interface SearchBarProps {
    state: boolean;
    setState: (arg: boolean) => void
    className?:string;
}
export const SearchBar: FC<SearchBarProps> = (
    { className = '', setState, state },
) => {
    const { pathname } = useLocation();

    if (pathname === '/') {
        return (
            <div className={classnames(cls.searchBar, {}, [className])}>
                <MagnifyingGlassIcon className={cls.searchIcon} onClick={() => setState(!state)} />
                <div className={classnames(cls.inputBlock, { [cls.inputBlockShow]: state })}>
                    <Layout className={cls.inputContainer}>
                        <input
                            type="text"
                            className={cls.input}
                        />
                        <MagnifyingGlassIcon className={cls.secondSearch} />
                    </Layout>

                </div>
            </div>
        );
    }

    return <div />;
};
