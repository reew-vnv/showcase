import { Profile } from 'entities/profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileScheme {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string
    readonly: boolean,
    validateErrors?: ValidateProfileError[]
}
