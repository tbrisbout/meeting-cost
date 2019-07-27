import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
  font-size: 4em;
`;

const DEFAULT_DAILY_RATE = 600;
const DEFAULT_MINUTES_IN_A_DAY = 8 * 60;

const computeCost = ({ duration, attendeeCount }) =>
  DEFAULT_DAILY_RATE * duration * attendeeCount / DEFAULT_MINUTES_IN_A_DAY

const Cost = ({ duration = 0, attendeeCount = 0 }) => (
  <Result data-testid="cost">{computeCost({ duration, attendeeCount })}€</Result>
);

export default Cost;
