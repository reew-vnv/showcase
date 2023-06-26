import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/page/page';
import { VStack } from 'shared/ui/stack/vstack/vstack';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/text/text';
import { useTranslation } from 'react-i18next';
import { EditableProfileCard } from 'features/editable-profile-card';
import {
    EditableProfileHeader,
} from 'features/editable-profile-card/ui/editable-profile-header/editable-profile-header';

interface ProfileProps {
    className?: string,
}

const Profile = ({ className }: ProfileProps) => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('profile');
    if (!id) {
        return <Text text={t('Profile not Found')} />;
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileHeader />
                <EditableProfileCard id={id!} />
            </VStack>
        </Page>
    );
};

export default Profile;
