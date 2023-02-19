import { render } from 'react-dom';
import { App } from 'app/app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme_provider';
import { ErrorBoundary } from 'app/providers/error_boundary';
import 'app/styles/index.scss';

import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
