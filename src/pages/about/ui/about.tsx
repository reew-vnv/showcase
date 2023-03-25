import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/page/page';

const About = () => {
    const { t } = useTranslation('about');
    return (
        <Page>
            {t('About')}
        </Page>
    );
};

export default About;
