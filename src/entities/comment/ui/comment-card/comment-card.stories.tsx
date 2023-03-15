import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './comment-card';

export default {
    title: '*/comment-card',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
