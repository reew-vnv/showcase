import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleEdit } from './article-edit';

export default {
    title: '*/article-edit',
    component: ArticleEdit,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEdit>;

const Template: ComponentStory<typeof ArticleEdit> = (args) => <ArticleEdit {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
