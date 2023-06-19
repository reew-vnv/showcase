import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/select/select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string,
    value?: Country,
    onChange?: (value: Country) => void,
    readonly?: boolean
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Hungary, content: Country.Hungary },
    { value: Country.Germany, content: Country.Germany },
    { value: Country.France, content: Country.France },
    { value: Country.England, content: Country.England },
    { value: Country.Italy, content: Country.Italy },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Choose Country')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});
