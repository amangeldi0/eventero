import {
    AtSymbolIcon,
    LockClosedIcon,
    PhoneIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
    emailSchema,
    nameSchema,
    passwordSchema,
    phoneSchema,
} from '@/shared/constants/validations/validate';
import {
    Button,
    ButtonTheme,
} from '@/shared/ui/Button/Button';
import { SingUpForm } from '@/widgets/Auth/ui/Form/Form';

import cls from '../Auth.module.scss';

export interface FormDataSingUp {
    name: string;
    surname: string;
    email: string;
    phoneNumber: number;
    password: string;
    confirmPassword: string;
}

interface SingUpProps {
    setAuthState: (arg0: boolean) => void
}

export const SingUp:FC<SingUpProps> = ({ setAuthState }) => {
    const [password, setPassword] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<boolean>(false);

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        setError,
    } = useForm<FormDataSingUp>({ mode: 'onBlur' });

    const submitForm = (data: FormDataSingUp) => {
        if (data.password !== data.confirmPassword) {
            setError('confirmPassword', { message: 'Пароли не совпадают' });
        } else {
            return data;
        }

        return '';
    };

    return (

        <form
            className={cls.form}
            onSubmit={handleSubmit(submitForm)}
        >
            <div className={cls.title}>Регистрация</div>
            <div className={cls.fields}>
                <SingUpForm
                    register={register}
                    errors={errors}
                    value="name"
                    placeholder="Ведите имя"
                    type="text"
                    schema={nameSchema}
                >
                    <UserIcon className={cls.icon} />
                </SingUpForm>

                <SingUpForm
                    register={register}
                    errors={errors}
                    value="surname"
                    placeholder="Ведите фамилию"
                    type="text"
                    schema={nameSchema}
                >
                    <UserIcon className={cls.icon} />
                </SingUpForm>

                <SingUpForm
                    register={register}
                    errors={errors}
                    value="surname"
                    placeholder="Ведите почту"
                    type="email"
                    schema={emailSchema}
                >
                    <AtSymbolIcon className={cls.icon} />
                </SingUpForm>

                <SingUpForm
                    register={register}
                    errors={errors}
                    value="phoneNumber"
                    placeholder="Ведите номер телефона с 996"
                    type="text"
                    schema={phoneSchema}
                >
                    <PhoneIcon className={cls.icon} />
                </SingUpForm>

                <SingUpForm
                    register={register}
                    errors={errors}
                    value="password"
                    placeholder="Ведите пароль"
                    type={password ? 'text' : 'password'}
                    schema={passwordSchema}
                    setShow={setPassword}
                    password
                    show={password}
                >
                    <LockClosedIcon className={cls.icon} />
                </SingUpForm>

                <SingUpForm
                    register={register}
                    errors={errors}
                    value="confirmPassword"
                    placeholder="Потвердите пароль"
                    type={confirmPassword ? 'text' : 'password'}
                    schema={passwordSchema}
                    password
                    setShow={setConfirmPassword}
                    show={confirmPassword}
                >
                    <LockClosedIcon className={cls.icon} />
                </SingUpForm>
            </div>

            <Button
                disabled={isSubmitting}
                type="submit"
                theme={ButtonTheme.CONTAINED}
                className={cls.button}
            >
                Зарегистрироваться
            </Button>
            <div className={cls.link}>
                Уже есть аккаунт?
                {' '}
                <span
                    role="presentation"
                    onClick={() => setAuthState(false)}
                >
                    Войти
                </span>
            </div>
        </form>

    );
};
