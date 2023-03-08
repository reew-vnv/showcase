import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './select.module.scss';

export interface SelectOption {
    value: string,
    content: string
}

interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOption[],
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange?.(e.target.value);
        }
    };
    return (
        <div className={classNames(cls.select_wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label} :`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
