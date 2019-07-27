import React from 'react';
import App from './App';
import { assert } from 'riteway-jest';
import { cleanup, render } from '@testing-library/react';


describe('<App/>', () => {
  afterEach(cleanup);

  const { getByTestId } = render(<App/>);

  assert({
    given: 'the application title',
    should: 'be Meeting Cost',
    actual: getByTestId('appTitle').textContent,
    expected: 'Meeting Cost',
  });
})
