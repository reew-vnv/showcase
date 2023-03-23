import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from 'shared/ui/text/text';
import { Card } from './card';

export default {
    title: '*/card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <Text title="test" text="text text text" />,
};
