import React from 'react';
import { assert } from 'riteway-jest';
import { cleanup, render } from '@testing-library/react';

import App from './App';

describe('<App/>', () => {
  afterEach(cleanup);

  const { getByTestId } = render(<App/>);

  assert({
    given: 'the application header title',
    should: 'be Meeting Cost',
    actual: getByTestId('appTitle').textContent,
    expected: 'Meeting Cost',
  });

  assert({
    given: 'the application footer',
    should: 'show an incentive message',
    actual: getByTestId('appFooter').textContent,
    expected: 'Do you really need this?',
  });
})
