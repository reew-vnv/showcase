import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar/ui/sidebar/sidebar';
import { renderWithTranslation } from 'shared/lib/tests/render_with_translation/render_with_translation';

describe('sidebar', () => {
    test('render sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
