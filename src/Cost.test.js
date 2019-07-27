import React from 'react';
import { assert } from 'riteway-jest';
import { cleanup, render } from '@testing-library/react';

import Cost from './Cost';

describe('<Cost />', () => {

  assert({
    given: 'a 120 minutes duration and 5 attendees',
    should: 'show a meeting cost of 750€',
    expected: '750€',
    actual: render(<Cost attendeeCount={5} duration={120} />).getByTestId('cost').textContent,
  })
  cleanup();

  assert({
    given: 'a 60 minutes duration and 1 attendee',
    should: 'show a meeting cost of 75€',
    expected: '75€',
    actual: render(<Cost attendeeCount={1} duration={60} />).getByTestId('cost').textContent,
  })
  cleanup();

  assert({
    given: 'no duration nor attendees',
    should: 'show a meeting cost of 0€',
    expected: '0€',
    actual: render(<Cost />).getByTestId('cost').textContent,
  })
  cleanup();

});
