import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from '../button/button';

describe('button.test', () => {
    test('render button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('render button with class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
