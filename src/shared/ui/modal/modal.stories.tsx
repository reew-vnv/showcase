import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme_decorator/theme_decorator';
import { Theme } from 'app/providers/theme_provider';
import { Modal } from './modal';

export default {
    title: 'shared/modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'TEXT TEST MODAL',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'TEXT TEST MODAL',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
