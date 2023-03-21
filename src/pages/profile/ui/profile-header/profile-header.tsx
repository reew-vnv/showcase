import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text/text';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entities/user';
import cls from './profile-header.module.scss';

interface ProfileHeaderProps {
    className?: string,
}

export const ProfileHeader = ({ className }: ProfileHeaderProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profile = useSelector(getProfileData);
    const canEdit = authData?.id === profile?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <div className={classNames(cls.profile_header, {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div className={cls.btn_wrapper}>
                    {' '}
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.edit_button}
                                onClick={onEdit}
                            >
                                {t('Edit')}
                            </Button>
                        )
                        : (
                            <div>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    className={cls.edit_button}
                                    onClick={onCancelEdit}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    className={cls.edit_button}
                                    onClick={onSave}
                                >
                                    {t('Save')}
                                </Button>
                            </div>
                        )}
                </div>
            )}
        </div>
    );
};
