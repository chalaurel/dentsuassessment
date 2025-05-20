import { render, screen } from '@testing-library/react';
import CardComponent from '@/components/CardComponent';

test('renders conference card with title', () => {
    render(<CardComponent title="React Finland" />);
    expect(screen.getByText('React Finland')).toBeInTheDocument();
});
