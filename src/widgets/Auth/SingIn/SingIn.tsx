import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
    LockClosedIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import { required } from '@/shared/constants/validations/validate';
import {
    Button,
    ButtonTheme,
} from '@/shared/ui/Button/Button';
import {
    SingInForm,
} from '@/widgets/Auth/ui/Form/Form';

import cls from '../Auth.module.scss';

export interface FormDataSingIn {
    email: string;
    phoneNumber: number;
    password: string;
}

interface SingInProps {
    setAuthState: (arg0:boolean) => void
}

export const SingIn: FC<SingInProps> = ({ setAuthState }) => {
    const [show, setShow] = useState<boolean>(false);

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm<FormDataSingIn>({ mode: 'onBlur' });

    const submitForm = (data: FormDataSingIn) => data;

    return (
        <form
            className={cls.form}
            onSubmit={handleSubmit(submitForm)}
        >
            <div className={cls.title}>Вход</div>
            <div className={cls.fields}>
                <SingInForm
                    register={register}
                    value="email"
                    placeholder="Ведите почту"
                    type="text"
                    schema={{ required }}
                    errors={errors}
                >
                    <UserIcon className={cls.icon} />
                </SingInForm>
                <SingInForm
                    register={register}
                    value="password"
                    placeholder="Ведите пароль"
                    type={show ? 'text' : 'password'}
                    schema={{ required }}
                    errors={errors}
                    password
                    show={show}
                    setShow={setShow}
                >
                    <LockClosedIcon className={cls.icon} />
                </SingInForm>

            </div>

            <Button
                disabled={isSubmitting}
                type="submit"
                theme={ButtonTheme.CONTAINED}
                className={cls.button}
            >
                Войти
            </Button>
            <div className={cls.link}>
                Нет аккаунта?
                {' '}
                <span
                    role="presentation"
                    onClick={() => setAuthState(true)}
                >
                    Зарегистрируйтесь
                </span>
            </div>

            <div className={cls.linkWithoutBorder}>
                <span
                    role="presentation"
                >
                    Забыл пароль
                </span>
            </div>
        </form>

    );
};
