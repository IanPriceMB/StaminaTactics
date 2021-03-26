import React from 'react';
import { render } from '@testing-library/react';
import Node from '.';

describe('The Basics of <Node />', () => {
  it('exists', () => {
    expect(Node).toBeDefined();
  });

  it('renders', () => {
    render(<Node />);
  });
});
