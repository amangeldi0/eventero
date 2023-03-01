import { useState } from 'react';

import { SingIn, SingUp } from '@/widgets/Auth';

const AuthPageAsync = () => {
    const [authState, setAuthState] = useState<boolean>(false);

    return (
        <div>
            {
                authState
                    ? <SingUp setAuthState={setAuthState} />
                    : <SingIn setAuthState={setAuthState} />
            }
        </div>
    );
};

export default AuthPageAsync;
