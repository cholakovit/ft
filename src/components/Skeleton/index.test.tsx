import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skeleton from './index';
import { LOADING_MSG } from '../../helper/constants';

describe('Skeleton Component', () => {
  it('renders correctly', () => {
    render(<Skeleton count={3} />);
    const items = screen.getAllByText(LOADING_MSG);
    expect(items).toHaveLength(3);
  });
});
