import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { FC, HTMLInputTypeAttribute, ReactNode } from 'react';
import {
    FieldErrors,
    RegisterOptions,
    UseFormRegister,
} from 'react-hook-form';

import { classnames } from '@/shared/helpers/classnames';

import { FormDataSingIn } from '../../SingIn/SingIn';
import { FormDataSingUp } from '../../SingUp/SingUp';

import cls from '../../Auth.module.scss';

type SingUnValues = 'name' | 'surname' | 'email' | 'phoneNumber' | 'password' | 'confirmPassword'

interface SingUpProps {
    children: ReactNode;
    register: UseFormRegister<FormDataSingUp>,
    errors: FieldErrors<FormDataSingUp>,
    value: SingUnValues,
    placeholder: string,
    type: HTMLInputTypeAttribute,
    schema: RegisterOptions,
    password?: boolean,
    setShow?: (arg0: boolean) => void,
    show?: boolean,
}

export const SingUpForm:FC<SingUpProps> = (props) => {
    const {
        register,
        errors,
        value,
        placeholder,
        type,
        schema,
        password = false,
        setShow = (arg) => arg,
        show = false,
        children,
    } = props;

    return (
        <div className={cls.field}>
            <div className={cls.fieldEye}>
                {children}
                <input
                    type={type}
                    {...register(`${value}`, schema)}
                    className={
                        classnames(cls.input, { [cls.lineError]: Boolean(errors[value]!) }, [])
                    }
                    placeholder={placeholder}
                />
                {password
                    && (
                        <div>
                            {show
                                ? <EyeSlashIcon className={cls.fieldEyeIcon} onClick={() => setShow(false)} />
                                : <EyeIcon className={cls.fieldEyeIcon} onClick={() => setShow(true)} />}
                        </div>
                    )}
            </div>
            <div className={cls.error}>
                {errors[value]! && errors[value]!.message}
            </div>
        </div>
    );
};

type SingInValues = 'email' | 'phoneNumber' | 'password'

interface SingInProps {
    register: UseFormRegister<FormDataSingIn>
    children: ReactNode;
    errors: FieldErrors<FormDataSingIn>,
    value: SingInValues,
    placeholder: string,
    type: HTMLInputTypeAttribute,
    schema: RegisterOptions,
    password?: boolean,
    setShow?: (arg0: boolean) => void,
    show?: boolean,
}

export const SingInForm:FC<SingInProps> = (props) => {
    const {
        register,
        errors,
        value,
        placeholder,
        type,
        schema,
        password = false,
        setShow = (arg) => arg,
        show = false,
        children,
    } = props;

    return (
        <div className={cls.field}>
            <div className={cls.fieldEye}>
                {children}
                <input
                    type={type}
                    {...register(`${value}`, schema)}
                    className={
                        classnames(cls.input, { [cls.lineError]: Boolean(errors[value]!) }, [])
                    }
                    placeholder={placeholder}
                />
                {password
                    && (
                        <div>
                            {show
                                ? <EyeSlashIcon className={cls.fieldEyeIcon} onClick={() => setShow(false)} />
                                : <EyeIcon className={cls.fieldEyeIcon} onClick={() => setShow(true)} />}
                        </div>
                    )}
            </div>
            <div className={cls.error}>
                {errors[value]! && errors[value]!.message}
            </div>
        </div>
    );
};
