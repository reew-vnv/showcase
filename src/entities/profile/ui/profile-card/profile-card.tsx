import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/profile/model/selectors/get-profile-data/get-profile-data';
import {
    getProfileIsLoading,
} from 'entities/profile/model/selectors/get-profile-is-loading/get-profile-is-loading';
import {
    getProfileError,
} from 'entities/profile/model/selectors/get-profile-error/get-profile-error';
import { Text } from 'shared/ui/text/text';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { Input } from 'shared/ui/input/input';
import cls from './profile-card.module.scss';

interface ProfileCardProps {
    className?: string,
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    return (
        <div className={classNames(cls.profile_card, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.edit_button}
                >
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Firstname')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
