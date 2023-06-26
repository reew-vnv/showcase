import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesInfiniteList } from './articles-infinite-list';

export default {
    title: 'entities/articles-infinite-list',
    component: ArticlesInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesInfiniteList>;

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => <ArticlesInfiniteList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
