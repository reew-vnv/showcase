import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar/ui/sidebar/sidebar';
import { componentRender } from 'shared/lib/tests/component-render/component-render';

describe('sidebar.test', () => {
    test('render sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
