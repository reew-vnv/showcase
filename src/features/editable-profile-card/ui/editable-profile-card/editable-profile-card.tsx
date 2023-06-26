import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { Text, TextTheme } from 'shared/ui/text/text';
import { ProfileCard } from 'entities/profile';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { VStack } from 'shared/ui/stack';
import { EditableProfileHeader } from '../editable-profile-header/editable-profile-header';
import { ValidateProfileError } from '../../model/types/editable-profile-card-schema';
import {
    getProfileForm, getProfileIsLoading, getProfileError,
    getProfileReadonly, getProfileValidateErrors,
} from '../../model/selectors';
import { fetchProfileData } from '../../model/services/fetch-profile-data/fetch-profile-data';
import { profileActions, profileReducer } from '../../model/slice/profile-slice';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface EditableProfileCardProps {
    className?: string;
    id: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const [currentField, setCurrentField] = useState('');

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect User Data'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect Age'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect Country'),
        [ValidateProfileError.INCORRECT_CURRENCY]: t('Incorrect Currency'),
        [ValidateProfileError.NO_DATA]: t('No Data'),
        [ValidateProfileError.SERVER_ERROR]: t('Server Error'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    const handleChange = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            [currentField]: currentField !== 'age' ? value : Number(value || 0),
        }));
    }, [currentField, dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="8"
                max
                className={classNames('', {}, [className])}
            >
                <EditableProfileHeader />
                {validateErrors?.length && validateErrors.map((error) => (
                    <Text
                        key={error}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[error]}
                        data-testid="editable-profile-card.error"
                    />
                )) }
                <ProfileCard
                    data={form}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    handleChange={handleChange}
                    setCurrentField={setCurrentField}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
