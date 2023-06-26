import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditableProfileHeader } from './editable-profile-header';

export default {
    title: 'features/editable-profile-header',
    component: EditableProfileHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileHeader>;

const Template: ComponentStory<typeof EditableProfileHeader> = (args) => <EditableProfileHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
