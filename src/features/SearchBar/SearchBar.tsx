import React from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import cls from './SearchBar.module.scss';

export const SearchBar = () => (

    <div className={cls.inputContainer}>
        <MagnifyingGlassIcon className={cls.searchIcon} />
        <input />
    </div>

);
