import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { profileReducer } from 'entities/profile';
import { classNames } from 'shared/lib/classNames/classNames';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfileProps {
    className?: string,
}

const Profile = ({ className }: ProfileProps) => {
    const { t } = useTranslation('profile');
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Profile Page')}
            </div>
        </DynamicModuleLoader>
    );
};

export default Profile;
