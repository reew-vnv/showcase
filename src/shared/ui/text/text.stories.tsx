import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme_decorator/theme_decorator';
import { Theme } from 'app/providers/theme_provider';
import { Text, TextTheme } from './text';

export default {
    title: 'shared/text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

// @ts-ignore
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description Description Description Description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Description Description Description Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
};