import { FC } from 'react';
import { Link } from 'react-router-dom';

import { User } from '../ui/User';

import cls from '../Navbar.module.scss';

interface ConditionRenderProps {
    jwt: string;
    path: string;
}

export const ConditionRender:FC<ConditionRenderProps> = (
    { path, jwt },
) => (
    <div>
        {path === '/auth' ? ''
            : (
                <div>
                    {
                        jwt === null ? (
                            <div className={cls.links}>
                                <Link to="/auth">Authorize</Link>
                            </div>
                        ) : (
                            <User
                                className={
                                    cls.userButton
                                }
                            />
                        )
                    }
                </div>
            )}
    </div>
);
