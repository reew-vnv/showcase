import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/page/page';

const Forbidden = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('You are not allowed to visit this Page')}
        </Page>
    );
};

export default Forbidden;
