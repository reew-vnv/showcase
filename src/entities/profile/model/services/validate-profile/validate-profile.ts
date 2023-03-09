import { Profile } from 'entities/profile';
import { ValidateProfileError } from 'entities/profile/model/types/profile';

export const validateProfile = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        firstname, lastname, age, country, currency, city, username,
    } = profile;
    const errors: ValidateProfileError[] = [];

    if (!firstname || !lastname || !city || !username) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    if (!currency) {
        errors.push(ValidateProfileError.INCORRECT_CURRENCY);
    }

    return errors;
};
