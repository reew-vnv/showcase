import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { ColorsEnum, Icon } from 'shared/ui/icon/icon';
import CopyIcon from 'shared/assets/icons/content-copy.svg';
import cls from './code.module.scss';

interface CodeProps {
    className?: string,
    text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copy_btn} theme={ButtonTheme.CLEAR}>
                <Icon Svg={CopyIcon} fill={ColorsEnum.PRIMARY} size="24px" />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
