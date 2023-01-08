import React from 'react';
import { render } from '@testing-library/react';

const App = () => <div>spanS</div>;

describe('sgd', () => {
  test('sdgsdg', async () => {
    const { findByText } = render(<App />);

    expect(await findByText('spanS')).toBeTruthy();
  });
});
