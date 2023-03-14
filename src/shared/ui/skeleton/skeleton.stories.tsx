import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { Skeleton } from './skeleton';

export default {
    title: 'shared/skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    height: 100,
    width: '100%',
};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    height: 100,
    width: 200,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    height: 100,
    width: '100%',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    height: 100,
    width: 200,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryGreen = Template.bind({});
PrimaryGreen.args = {
    height: 100,
    width: '100%',
};
PrimaryGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const CircleGreen = Template.bind({});
CircleGreen.args = {
    border: '50%',
    height: 100,
    width: 200,
};
CircleGreen.decorators = [ThemeDecorator(Theme.GREEN)];
