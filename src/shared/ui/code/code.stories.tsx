import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './code';

export default {
    title: 'shared/code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'import React from \'react\';\n'
        + 'import { ComponentMeta, ComponentStory } from \'@storybook/react\';\n'
        + 'import { Code } from \'./code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'shared/code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
