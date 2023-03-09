import { Currency } from 'entities/currency/model/types/currency';
import { Country } from 'entities/country/model/types/country';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    'firstname'?: string,
    'lastname'?: string,
    'age'?: number,
    'currency'?: Currency,
    'country'?: Country,
    'city'?: string,
    'username'?: string,
    'avatar'?: string
}

export interface ProfileScheme {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string
    readonly: boolean,
    validateErrors?: ValidateProfileError[]
}