import React from 'react';
import { Link } from 'react-router-dom';

import cls from '@/widgets/Navbar/Navbar.module.scss';

export const AuthLink = () => (
    <div className={cls.links}>
        <Link to="/auth">Authorize</Link>
    </div>
);
