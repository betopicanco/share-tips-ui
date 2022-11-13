import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button/>', () => {
  it('should render button', () => {
    render(<Button>TEST</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument()
  })
})

export {};