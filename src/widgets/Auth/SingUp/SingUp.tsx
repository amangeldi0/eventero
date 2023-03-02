import { FC } from 'react';
import { useForm } from 'react-hook-form';

import {
    emailSchema, nameSchema, passwordSchema, phoneSchema,
} from '@/shared/constants/validations/validate';
import { classnames } from '@/shared/helpers/classnames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import cls from './SingUp.module.scss';

interface FormData {
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
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        setError,
    } = useForm<FormData>({ mode: 'onBlur' });

    const submitForm = (data: FormData) => {
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
                <div className={cls.field}>
                    <input
                        type="text"
                        {...register('name', nameSchema)}
                        className={
                            classnames(
                                cls.input,
                                { [cls.lineError]: Boolean(errors.name) },
                                [],
                            )
                        }
                        placeholder="Ведите имя"
                    />
                    <div className={cls.error}>
                        {errors.name && errors.name.message}
                    </div>
                </div>

                <div className={cls.field}>
                    <input
                        type="text"
                        {...register('surname', nameSchema)}
                        className={
                            classnames(
                                cls.input,
                                { [cls.lineError]: Boolean(errors.surname) },
                                [],
                            )
                        }
                        placeholder="Ведите фамилию"
                    />
                    <div className={cls.error}>
                        {errors.surname && errors.surname.message}
                    </div>
                </div>

                <div className={cls.field}>
                    <input
                        type="text"
                        {...register('email', emailSchema)}
                        className={
                            classnames(
                                cls.input,
                                { [cls.lineError]: Boolean(errors.email) },
                                [],
                            )
                        }
                        placeholder="Ведите почту"
                    />
                    <div className={cls.error}>
                        {errors.email && errors.email.message}
                    </div>
                </div>

                <div className={cls.field}>
                    <input
                        type="text"
                        {...register('phoneNumber', phoneSchema)}
                        className={
                            classnames(
                                cls.input,
                                { [cls.lineError]: Boolean(errors.phoneNumber) },
                                [],
                            )
                        }
                        placeholder="Ведите номер телефона с 996"
                    />
                    <div className={cls.error}>
                        {errors.phoneNumber && errors.phoneNumber.message}
                    </div>
                </div>

                <div className={cls.field}>
                    <input
                        type="password"
                        {...register('password', passwordSchema)}
                        className={
                            classnames(
                                cls.input,
                                { [cls.lineError]: Boolean(errors.password) },
                                [],
                            )
                        }
                        placeholder="Ведите пароль"
                    />
                    <div className={cls.error}>
                        {errors.password && errors.password.message}
                    </div>
                </div>

                <div className={cls.field}>
                    <input
                        type="password"
                        {...register('confirmPassword', passwordSchema)}
                        className={
                            classnames(
                                cls.input,
                                { [cls.lineError]: Boolean(errors.confirmPassword) },
                                [],
                            )
                        }
                        placeholder="Потвердите пароль"
                    />
                    <div className={cls.error}>
                        {errors.confirmPassword && errors.confirmPassword.message}
                    </div>
                </div>
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
