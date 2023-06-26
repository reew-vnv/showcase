import { Currency } from 'entities/currency/model/types/currency';
import { Country } from 'entities/country/model/types/country';

export interface Profile {
    id?: string,
    firstname?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}
