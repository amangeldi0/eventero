import { useState } from 'react';

import { SingIn, SingUp } from '@/widgets/Auth';

import cls from './AuthPage.module.scss';

const AuthPage = () => {
    const [authState, setAuthState] = useState<boolean>(false);

    return (
        <div className={cls.auth}>
            {
                authState
                    ? <SingUp setAuthState={setAuthState} />
                    : <SingIn setAuthState={setAuthState} />
            }
        </div>
    );
};

export default AuthPage;
