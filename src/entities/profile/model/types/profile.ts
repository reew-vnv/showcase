import { Currency } from 'entities/currency/model/types/currency';
import { Country } from 'entities/country/model/types/country';

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
    readonly: boolean
}
