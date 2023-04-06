import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError,
} from 'entities/profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { Text, TextTheme } from 'shared/ui/text/text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/page/page';
import { ProfileHeader } from './profile-header/profile-header';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfileProps {
    className?: string,
}

const Profile = ({ className }: ProfileProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{id: string}>();

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
            <Page className={classNames('', {}, [className])}>
                <ProfileHeader />
                {validateErrors?.length && validateErrors.map((error) => (
                    <Text
                        key={error}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[error]}
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
            </Page>
        </DynamicModuleLoader>
    );
};

export default Profile;
