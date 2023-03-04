import React from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import cls from './SearchBar.module.scss';

export const SearchBar = () => (

    <div className={cls.inputContainer}>
        <div className={cls.searchIcon}>
            <MagnifyingGlassIcon className={cls.searchIcon} />
        </div>
        <input />
    </div>

);
