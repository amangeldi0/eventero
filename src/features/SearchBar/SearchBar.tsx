import React from 'react';

import { SearchIcon } from '@/shared/assets/SearchIcon';

import cls from './SearchBar.module.scss';

export const SearchBar = () => (

    <div className={cls.inputContainer}>
        <div className={cls.searchIcon}><SearchIcon className={cls.searchIcon} /></div>
        <input />
    </div>

);
