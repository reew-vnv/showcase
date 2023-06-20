const firtsChatUpperCase = require('../first-char-upper-case');

module.exports = (layer, componentName) => `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ${firtsChatUpperCase(componentName)} } from './${componentName}';

export default {
    title: '${layer}/${componentName}',
    component: ${firtsChatUpperCase(componentName)},
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ${firtsChatUpperCase(componentName)}>;

const Template: ComponentStory<
    typeof ${firtsChatUpperCase(componentName)}
    > = (args) => <${firtsChatUpperCase(componentName)} {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};`;
