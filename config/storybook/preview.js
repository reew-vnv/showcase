import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/style_decorator/style_decorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/theme_decorator/theme_decorator';
import { RouterDecorator } from '../../src/shared/config/storybook/router_decorator/router_decorator';
import { Theme } from '../../src/app/providers/theme_provider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
