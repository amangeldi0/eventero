import { FC } from 'react';
import { Link } from 'react-router-dom';

import { LogoIcon } from '@/shared/assets/LogoIcon';
import { UserIcon } from '@/shared/assets/UserIcon';
import { classNames } from '@/shared/helpers/classnames';

import cls from './Navbar.module.scss';

export const Navbar: FC = () => (
    <div className={classNames(cls.Navbar, {}, [])}>
        <LogoIcon />
        <div className={classNames(cls.links, {}, [])}>
            <Link to={}><UserIcon /></Link>
        </div>
    </div>
);

export default Navbar;
