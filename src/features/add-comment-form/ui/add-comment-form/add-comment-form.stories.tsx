import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import AddCommentForm from './add-comment-form';

export default {
    title: 'features/add-comment-form',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    onSendComment: action('onSendComment'),
};
Primary.decorators = [StoreDecorator({})];
