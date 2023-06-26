import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditableProfileCard } from './editable-profile-card';

export default {
    title: 'features/editable-profile-card',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<
    typeof EditableProfileCard
    > = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
