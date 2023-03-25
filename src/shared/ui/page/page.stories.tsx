import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Page } from './page';

export default {
    title: '*/page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
