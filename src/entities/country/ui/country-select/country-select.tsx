import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/list-box/list-box';
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
        <ListBox
            readonly={readonly}
            className={classNames('', {}, [className])}
            defaultValue={t('Choose Country')}
            value={value}
            label={t('Choose Country')}
            items={options}
            onChange={onChangeHandler}
            direction="top"
        />
    );
});
