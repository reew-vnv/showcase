import React from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/text/text';
import { Input } from 'shared/ui/input/input';
import { Loader } from 'shared/ui/loader/loader';
import { Avatar } from 'shared/ui/avatar/avatar';
import { Currency } from 'entities/currency/model/types/currency';
import { CurrencySelect } from 'entities/currency';
import { Country } from 'entities/country/model/types/country';
import { CountrySelect } from 'entities/country';
import { HStack, VStack } from 'shared/ui/stack';
import { Profile } from '../../model/types/profile';
import cls from './profile-card.module.scss';

interface ProfileCardProps {
    className?: string,
    data?: Profile
    error?: string,
    isLoading?: boolean,
    readonly?: boolean
    onChangeCurrency?: (value?: Currency) => void,
    onChangeCountry?: (value?: Country) => void,
    handleChange: (name?: any, value?: string) => void,
    setCurrentField: (field: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeCountry,
        onChangeCurrency,
        handleChange,
        setCurrentField,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(cls.profile_card, { [cls.loading]: true }, [className])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(cls.profile_card, {}, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Profile Page Error Title')}
                    text={t('Profile Page Error Text')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="8" max className={classNames(cls.profile_card, mods, [className])}>
            {data?.avatar && (
                <HStack
                    justify="center"
                    max
                    className={cls.avatar_wrapper}
                >
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.firstname}
                placeholder={t('Firstname')}
                className={cls.input}
                onChange={handleChange}
                readonly={readonly}
                onSelect={() => setCurrentField('firstname')}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Lastname')}
                className={cls.input}
                onChange={handleChange}
                readonly={readonly}
                onSelect={() => setCurrentField('lastname')}
            />
            <Input
                value={data?.age}
                placeholder={t('Age')}
                className={cls.input}
                onChange={handleChange}
                readonly={readonly}
                onSelect={() => setCurrentField('age')}
            />
            <Input
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                onChange={handleChange}
                readonly={readonly}
                onSelect={() => setCurrentField('city')}
            />
            <Input
                value={data?.username}
                placeholder={t('UserName')}
                className={cls.input}
                onChange={handleChange}
                readonly={readonly}
                onSelect={() => setCurrentField('username')}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Type link to Avatar')}
                className={cls.input}
                onChange={handleChange}
                readonly={readonly}
                onSelect={() => setCurrentField('avatar')}
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
        </VStack>
    );
};
