import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesFilters } from './articles-filters';

export default {
    title: 'pages/articles-filters',
    component: ArticlesFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
