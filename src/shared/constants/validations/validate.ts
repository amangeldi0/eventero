import { RegisterOptions } from 'react-hook-form';

const maxLength = (length: number) => ({
    value: length,
    message: `Максимальная длина ${length} символов`,
});

const minLength = (length: number) => ({
    value: length,
    message: `Минимальная длина ${length} символов`,
});

const patterEmail = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Ведите корректные данные',
};

const patternPhone = {
    value: /^996\d{9}$/,
    message: 'Ведите корректные данные',

};

export const required = {
    value: true,
    message: 'Обязательное поле',
};

export const phoneSchema: RegisterOptions = {
    required,
    minLength: minLength(12),
    maxLength: maxLength(12),
    pattern: patternPhone,
};

export const emailSchema: RegisterOptions = {
    required,
    minLength: minLength(2),
    maxLength: maxLength(30),
    pattern: patterEmail,
};

export const nameSchema: RegisterOptions = {
    required,
    minLength: minLength(2),
    maxLength: maxLength(18),
};

export const passwordSchema:RegisterOptions = {
    required,
    minLength: minLength(8),
};
