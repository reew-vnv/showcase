import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/page/page';

const Main = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Main')}
        </Page>
    );
};

export default Main;
