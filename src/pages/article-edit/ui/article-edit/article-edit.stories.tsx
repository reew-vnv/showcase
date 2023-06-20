import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import ArticleEdit from './article-edit';

export default {
    title: 'pages/article-edit',
    component: ArticleEdit,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEdit>;

const Template: ComponentStory<typeof ArticleEdit> = (args) => <ArticleEdit {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
