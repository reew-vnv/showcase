import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/page/page';

const AdminPanel = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Admin Panel')}
        </Page>
    );
};

export default AdminPanel;
