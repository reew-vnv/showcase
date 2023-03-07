import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfileProps {
    className?: string,
}

const Profile = ({ className }: ProfileProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Profile Page')}
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default Profile;
