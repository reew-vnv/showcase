import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleDetails from './article-details';

export default {
    title: 'pages/article-details',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
