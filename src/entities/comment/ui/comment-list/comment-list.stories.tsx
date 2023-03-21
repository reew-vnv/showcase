import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './comment-list';

export default {
    title: 'entities/comment-list',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'hello',
            user: { id: '1', username: 'Someone' },
        },
        {
            id: '2',
            text: 'hello again',
            user: { id: '2', username: 'Whoelse' },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [
        {
            id: '1',
            text: 'hello',
            user: { id: '1', username: 'Someone' },
        },
        {
            id: '2',
            text: 'hello again',
            user: { id: '2', username: 'Whoelse' },
        },
    ],
    isLoading: true,
};
