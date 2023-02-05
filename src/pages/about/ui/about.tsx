import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('About')}
        </div>
    );
};

export default About;
