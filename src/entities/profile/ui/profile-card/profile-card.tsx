import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/text/text';
import { Input } from 'shared/ui/input/input';
import { Profile } from 'entities/profile';
import { Loader } from 'shared/ui/loader/loader';
import { Avatar } from 'shared/ui/avatar/avatar';
import { Currency } from 'entities/currency/model/types/currency';
import { CurrencySelect } from 'entities/currency';
import { Country } from 'entities/country/model/types/country';
import { CountrySelect } from 'entities/country';
import cls from './profile-card.module.scss';

interface ProfileCardProps {
    className?: string,
    data?: Profile
    error?: string,
    isLoading?: boolean,
    readonly?: boolean
    onChangeLastName?: (value?: string) => void,
    onChangeFirstName?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUserName?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (value?: Currency) => void,
    onChangeCountry?: (value?: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeCity,
        onChangeAge,
        onChangeUserName,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.profile_card, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profile_card, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Profile Page Error Title')}
                    text={t('Profile Page Error Text')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.profile_card, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatar_wrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.firstname}
                    placeholder={t('Firstname')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Lastname')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('UserName')}
                    className={cls.input}
                    onChange={onChangeUserName}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Type link to Avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    value={data?.currency}
                    className={cls.select}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    className={cls.select}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
