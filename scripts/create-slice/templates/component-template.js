const firstCharUpperCase = require('../first-char-upper-case');
const undersope = require('../underscope');

const interfaceConst = 'interface';

module.exports = (componentName) => `import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './${componentName}.module.scss';

${interfaceConst} ${firstCharUpperCase(componentName)}Props {
    className?: string;
}

export const ${firstCharUpperCase(componentName)} = memo((props: ${firstCharUpperCase(componentName)}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.${undersope(componentName)}, {}, [className])}>
           
        </div>
    );
});`;
