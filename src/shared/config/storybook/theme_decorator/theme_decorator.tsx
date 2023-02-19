import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/theme_provider';

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            {story()}
        </div>
    </ThemeProvider>
);
