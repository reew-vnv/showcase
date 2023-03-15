import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './comment-list';

export default {
    title: '*/comment-list',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
