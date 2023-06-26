import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/user';
import { HStack } from 'shared/ui/stack';
import { Text } from 'shared/ui/text/text';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { getProfileData, getProfileReadonly } from '../../model/selectors';
import { profileActions } from '../../model/slice/profile-slice';
import {
    updateProfileData,
} from '../../model/services/update-profile-data/update-profile-data';

interface EditableProfileHeaderProps {
    className?: string,
}

export const EditableProfileHeader = memo(({ className }: EditableProfileHeaderProps) => {
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
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <>
                    {' '}
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Edit')}
                            </Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Save')}
                                </Button>
                            </HStack>
                        )}
                </>
            )}
        </HStack>
    );
});
