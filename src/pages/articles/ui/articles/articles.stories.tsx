import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Articles from './articles';

export default {
    title: 'pages/articles',
    component: Articles,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = (args) => <Articles {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
