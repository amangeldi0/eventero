import { FC } from 'react';
import { useForm } from 'react-hook-form';

import {
    emailSchema, passwordSchema,
} from '@/shared/constants/validations/validate';
import { classnames } from '@/shared/helpers/classnames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import cls from '../SingUp/SingUp.module.scss';

interface FormData {
    email: string;
    phoneNumber: number;
    password: string;
}

interface SingInProps {
    setAuthState: (arg0:boolean) => void
}

export const SingIn: FC<SingInProps> = ({ setAuthState }) => {
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm<FormData>({ mode: 'onBlur' });

    const submitForm = (data: FormData) => data;

    return (

        <form
            className={cls.form}
            onSubmit={handleSubmit(submitForm)}
        >
            <div className={cls.title}>Вход</div>
            <div className={cls.fields}>

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
                Нет аккаунта?
                {' '}
                <span
                    role="presentation"
                    onClick={() => setAuthState(true)}
                >
                    Зарегистрируйтесь
                </span>
            </div>
        </form>

    );
};
