/* eslint-disable no-undef */
import * as React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders the title properly', () => {
  const { getByText } = render(<Header />)
  getByText('ChefLab')
});